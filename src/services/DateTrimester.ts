import moment, {Moment} from "moment";
class DateTrimesterService {

    getStartTrimester(date: Date): Moment {
        let curMonth: Moment = moment(date)
        let quarter: number = curMonth.quarter()

        let startTrimester: number = 1
        if (quarter === 1) {
            startTrimester = 1
        } else if (quarter === 2) {
            startTrimester = 4
        } else if (quarter === 3) {
            startTrimester = 7
        } else if (quarter === 4) {
            startTrimester = 10
        }

        return moment(new Date(date.getFullYear(), startTrimester - 1, 1))
    }
}
let DateTrimester;

export default DateTrimester = new DateTrimesterService()
