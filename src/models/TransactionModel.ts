import SplittedTransaction from "./SplittedTransaction";

export enum TransactionTypeEnum {
    credit = "credit",
    debit = "debit"
}

export default class TransactionModel {
    id: number
    type: TransactionTypeEnum
    label: string
    price: number
    dateTime: Date
    slices: number|null
    splittedTransaction: SplittedTransaction[]|null

    constructor(partial: Partial<TransactionModel>) {
        Object.assign(this, partial)
        if (partial.dateTime !== undefined && partial.dateTime !== null) {
            this.dateTime = new Date(partial.dateTime)
        }

        if (partial.splittedTransaction !== undefined && partial.splittedTransaction !== null) {
            this.splittedTransaction = partial.splittedTransaction.map(val => new SplittedTransaction(val))
        }
    }

    getColoryType(): string {

        if (this.type === TransactionTypeEnum.credit) {
            return '#34D399'
        } else if (this.type === TransactionTypeEnum.debit) {
            return '#60A5FA'
        }

        throw new Error("No color for the specified transaction type")
    }

    pendingSlices(): number|null {
        if (this.slices === null) {
            return null
        }
        console.log('here')

        let price = 0
        this.splittedTransaction?.forEach((element: SplittedTransaction) => {
            if(!element.isCounted) {
                price += element.amount
            }
        })

        return price
    }
}
