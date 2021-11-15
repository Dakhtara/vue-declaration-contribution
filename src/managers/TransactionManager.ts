import Transaction from "../models/Transaction";
import mockJson from '../mocks/Transactions.json';

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
}

export const transactionManager = new TransactionManager()
