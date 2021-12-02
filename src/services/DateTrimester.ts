import moment, {Moment} from "moment";
class DateTrimesterService {

    getStartTrimester(date: Date): Moment {
        const curMonth: Moment = moment(date)
        const quarter: number = curMonth.quarter()

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

    getTrimesterAsString(date: Date|Moment): string
    {
        if (date instanceof Date) {
            date = moment(date)
        }
        const quarter: number = date.quarter()

        let prefix = 'ème'
        if (quarter === 1) {
            prefix = 'er'
        }

        return `${quarter}${prefix} trimestre de ${date.year()}`
    }
}
let DateTrimester;

export default DateTrimester = new DateTrimesterService()
