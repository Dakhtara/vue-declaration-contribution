import moment from "moment/moment";

export default class Transaction {
    id: number;
    type: string;
    label: string;
    price: number;
    dateTime: Date;
    slices: number|null;
    splittedTransaction: object|null;

    constructor(partial: Partial<Transaction>) {
        Object.assign(this, partial);
        if (partial.dateTime !== undefined && partial.dateTime !== null) {
            this.dateTime = new Date(partial.dateTime)
        }
    }

}
