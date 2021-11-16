import SplittedTransaction from "./SplittedTransaction";

export default class Transaction {
    id: number;
    type: string;
    label: string;
    price: number;
    dateTime: Date;
    slices: number|null;
    splittedTransaction: SplittedTransaction[]|null;

    constructor(partial: Partial<Transaction>) {
        Object.assign(this, partial);
        if (partial.dateTime !== undefined && partial.dateTime !== null) {
            this.dateTime = new Date(partial.dateTime)
        }

        if (partial.splittedTransaction !== undefined && partial.splittedTransaction !== null) {
            this.splittedTransaction = partial.splittedTransaction.map(val => new SplittedTransaction(val))
        }
    }

}
