import Transaction from "../models/Transaction";
import mockJson from '../mocks/Transactions.json';
import axios from 'axios';
class TransactionManager {
    async fetchAll(): Promise<Transaction[]>
    {
        let transactionJson;
        if (import.meta.env.VITE_USE_MOCK == 'true') {
            transactionJson = mockJson;
        } else {
            transactionJson = await fetch('url').then(res => res.json());
        }
        return transactionJson.map((el: Object) => new Transaction(el));
    }

    async save(transaction: Transaction): Promise<boolean>
    {
        if (import.meta.env.VITE_USE_MOCK == 'true') {
            return true;
        } else {
            let res = await axios.post('url', transaction).then((res) => console.log(res));

            return true;
        }
    }
}

export const transactionManager = new TransactionManager()
