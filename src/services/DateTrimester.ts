import {DateTime} from "luxon";
class DateTrimesterService {

    getStartTrimester(date: Date): DateTime
    {
        const curMonth: DateTime = DateTime.fromJSDate(date)
        const quarter: number = curMonth.quarter

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

        return DateTime.fromJSDate(new Date(date.getFullYear(), startTrimester - 1, 1))
    }

    getTrimesterAsString(date: Date|DateTime): string
    {
        if (date instanceof Date) {
            date = DateTime.fromJSDate(date)
        }
        const quarter: number = date.quarter

        let prefix = 'ème'
        if (quarter === 1) {
            prefix = 'er'
        }

        return `${quarter}${prefix} trimestre de ${date.year}`
    }

    getEndTrimester(date: Date): DateTime
    {
        const curMonth: DateTime = DateTime.fromJSDate(date)
        const quarter: number = curMonth.quarter

        let endTrimester: number = 1
        if (quarter === 1) {
            endTrimester = 3
        } else if (quarter === 2) {
            endTrimester = 6
        } else if (quarter === 3) {
            endTrimester = 9
        } else if (quarter === 4) {
            endTrimester = 12
        }

        return DateTime.fromJSDate(new Date(date.getFullYear(), endTrimester + 1, 0))

    }

    getStartAndEndTrimester(date: Date): {start: DateTime, end: DateTime}
    {
        return {start: this.getStartTrimester(date), end: this.getEndTrimester(date)}
    }
}
let DateTrimester;

export default DateTrimester = new DateTrimesterService()
