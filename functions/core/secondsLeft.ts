import {
    MilisecondsPerSecond,
    SecondsInDay,
    SecondsInLife,
    SecondsInWeek,
    SecondsInYear,
    SecondsPerHour,
    SecondsPerMinute,
} from '../../definitios/dates/dates'

export interface ILeft {
    seconds: number
    minutes: number
    hours: number
    days: number
    weeks: number
    years: number
}

export default function secondsLeft(birthDate: Date): ILeft | null {
    if (!birthDate) null

    const todayDate = new Date()

    const Seconds_Until_Birth = Math.round(
        (todayDate.getTime() - birthDate.getTime()) / MilisecondsPerSecond
    )

    const Seconds_Left = SecondsInLife - Seconds_Until_Birth

    const left: ILeft = {
        seconds: Math.round(Seconds_Left),
        minutes: Math.round(Seconds_Left / SecondsPerMinute),
        hours: Math.round(Seconds_Left / SecondsPerHour),
        days: Math.round(Seconds_Left / SecondsInDay),
        weeks: Math.round(Seconds_Left / SecondsInWeek),
        years: Math.round(Seconds_Left / SecondsInYear),
    }

    return left
}
