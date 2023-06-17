import { ERange } from '../../pages/Home'

export default function daysLeft(
    birthDate: Date,
    range: ERange,
    setLeft: (val: number) => void
) {
    if (!birthDate) {
        setLeft(0)
        return
    }

    const xInLifeLeft =
        range === ERange.Day
            ? Math.round(365.25 * 80)
            : range === ERange.Week
            ? Math.round(52.1785 * 80)
            : 80

    const todayDate = new Date()
    const Difference_In_Time = todayDate.getTime() - birthDate.getTime()
    const Difference_In_Days = Math.round(
        range === ERange.Day
            ? Difference_In_Time / (1000 * 3600 * 24)
            : range === ERange.Week
            ? Difference_In_Time / (1000 * 3600 * 24 * 7)
            : Difference_In_Time / (1000 * 3600 * 24 * 365.25)
    )
    const xPropablyLeft = Math.round(xInLifeLeft - Difference_In_Days)
    if (xPropablyLeft <= 0) {
        setLeft(0)
        return
    }
    setLeft(xPropablyLeft)
    console.log(xPropablyLeft)
}
