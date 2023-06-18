import { ILeft } from '../../functions/core/secondsLeft'
import { ERange } from '../../pages/Home'

export const createTimelineData = (
    amountTime: ILeft | null,
    range: ERange
): string[] => {
    if (!amountTime) return []
    const arr: any = []
    const actualYear = new Date().getFullYear()
    if (range === ERange.Year) {
        for (let i = 0; i < amountTime.years; i++) {
            arr.push(`${actualYear + arr.length}`)
        }
        return arr
    } else if (range === ERange.Week) {
        for (let i = 0; i < amountTime.weeks; i++) {
            arr.push(`week ${arr.length}`)
        }
        return arr
    } else {
        for (let i = 0; i < amountTime.days; i++) {
            arr.push(`day ${arr.length}`)
        }
        return arr
    }
}
