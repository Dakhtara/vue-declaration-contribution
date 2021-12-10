import TransactionModel, {TransactionTypeEnum} from "../models/TransactionModel";
import DateTrimester from "./DateTrimester";
import SplittedTransaction from "../models/SplittedTransaction";

class TransactionCalculatorService
{
     async calculate(transactions: TransactionModel[], trimester: Date): Promise<number> {
         let amount: number = 0
         let {start, end} = DateTrimester.getStartAndEndTrimester(trimester)
         //Loop over transactions
         await transactions.forEach((transaction: TransactionModel) => {
             if (transaction.slices === null) {
                 if (transaction.type == TransactionTypeEnum.credit) {
                     amount += transaction.price
                 } else {
                     amount -= transaction.price
                 }
             } else {

                 //If transaction has splitted transaction we keep the only splitted transaction of the date  whis is between the trimester
                 if (transaction.splittedTransaction !== null) {
                    transaction.splittedTransaction.some((splittedTransaction: SplittedTransaction) => {
                        if (splittedTransaction.date.getTime() > start.toMillis() && splittedTransaction.date.getTime() < end.toMillis()) {
                            if (transaction.type == TransactionTypeEnum.credit) {
                                amount += splittedTransaction.amount
                            } else {
                                amount -= splittedTransaction.amount
                            }
                            return true
                        }
                    })
                 }
             }
         })

         return amount
    }
}
let TransactionCalculater
export default TransactionCalculater = new TransactionCalculatorService()
