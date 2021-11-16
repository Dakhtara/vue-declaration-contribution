
export default class SplittedTransaction {
    id: number;
    amount: number;
    date: Date;
    isCounted: boolean;

    constructor(partial: Partial<SplittedTransaction>) {
        Object.assign(this, partial)
        if (partial.date !== undefined && partial.date !== null) {
            this.date = new Date(partial.date)
        }
    }
}
