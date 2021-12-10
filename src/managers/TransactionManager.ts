import TransactionModel from "../models/TransactionModel";
import mockJson from '../mocks/Transactions.json';
import axios, {AxiosResponse} from 'axios';
import {find, orderBy} from "lodash";
import DateTrimester from "../services/DateTrimester";
import {DateTime} from "luxon";
export interface Trimester {
    date: DateTime;
    transactions: TransactionModel[]
}

class TransactionManager {
    async fetchAll(): Promise<TransactionModel[]>
    {
        if (import.meta.env.VITE_USE_MOCK == 'true') {
            return mockJson.map((el: Object) => new TransactionModel(el));
        } else {
            let transactionJson: [] = await axios.get('/api/transactions').then((res: AxiosResponse) => res.data);
            return transactionJson.map((el: Object) => new TransactionModel(el));
        }
    }

    async fetchAllByTrimester(): Promise<Trimester[]> {
        let transactions = await this.fetchAll()
        let trimesters: Trimester[] = []

        transactions = orderBy(transactions, ['dateTime'], ['desc'])
        transactions.forEach((transaction) => {
            let trimesterDate = DateTrimester.getStartTrimester(transaction.dateTime)

            let trimester: Trimester|undefined = find(trimesters, (o) => {
                let dateTrimester = o.date.toFormat('D/M/YYYY')
                return dateTrimester === trimesterDate.toFormat('D/M/YYYY')
            })
            if (trimester === undefined) {
                trimester = {date: trimesterDate, transactions: []}
                trimesters.push(trimester)
            }

            trimester.transactions.push(transaction)
        })
        //We should use groupBy and orderBy
        return trimesters
    }

    async fetchByTrimester(date: Date): Promise<TransactionModel[]>
    {
        if (import.meta.env.VITE_USE_MOCK == 'true') {
            return mockJson.map((el: Object) => new TransactionModel(el));
        } else {
            let transactionJson: [] = await axios.get('/api/transactions', {params: {date: date.toISOString()}}).then((res: AxiosResponse) => res.data);
            return transactionJson.map((el: Object) => new TransactionModel(el));
        }
    }

    async save(transaction: TransactionModel): Promise<boolean>
    {
        if (import.meta.env.VITE_USE_MOCK == 'true') {
            return true;
        } else {
            const response: AxiosResponse = await axios.post('/api/transactions', transaction);
            return response.status === 201;
        }
    }
}

export const transactionManager = new TransactionManager()
