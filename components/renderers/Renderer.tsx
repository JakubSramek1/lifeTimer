import { Box } from '@mui/system'
import { Button, CircularProgress, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { ERange } from '../../pages/Home'
import daysLeft from '../../functions/core/daysLeft'
import {
    AverageLifeExpectancy,
    DaysPerYear,
    HoursPerDay,
    SecondsPerHour,
    SecondsPerMinute,
} from '../../definitios/dates/dates'
import secondsLeft from '../../functions/core/secondsLeft'

function FormatNumber(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const styles = {
    box: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    rederedEl: {
        m: '3px',
    },
} as const

interface Props {
    birthDate: Date
    range: ERange
}

const Renderer: FC<Props> = ({ birthDate, range }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [amountDays, setAmountDays] = useState<number>(0)
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        setIsLoading(true)
        setAmountDays(daysLeft(birthDate, range))
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [birthDate, range])

    useEffect(() => {
        const interval = setInterval(
            () => setCounter(daysLeft(birthDate, range)),
            1000
        )
        return () => clearInterval(interval)
    })

    const setElHeadings = (): any[] => {
        const arr: any = []
        if (range === ERange.Year) {
            for (let i = 0; i < amountDays; i++) {
                arr.push(2022 + arr.length)
            }
            return arr
        } else if (range === ERange.Week) {
            for (let i = 0; i < amountDays; i++) {
                arr.push(`week ${arr.length}`)
            }
            return arr
        } else {
            for (let i = 0; i < amountDays; i++) {
                arr.push(`day ${arr.length}`)
            }
            return arr
        }
    }

    return (
        <>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Box>
                        <Typography>
                            Average life expectancy in the USA is:{' '}
                            {AverageLifeExpectancy} years
                        </Typography>
                        <Typography>{`You have: ${FormatNumber(
                            amountDays
                        )} ${range}s left`}</Typography>

                        <Typography>{`You have: ${FormatNumber(
                            Math.round(counter * DaysPerYear)
                        )} days left`}</Typography>
                        <Typography>{`You have: ${FormatNumber(
                            Math.round(counter * DaysPerYear * HoursPerDay)
                        )} hours left`}</Typography>
                        <Typography>{`You have: ${FormatNumber(
                            Math.round(counter * DaysPerYear * HoursPerDay * 60)
                        )} minutes left`}</Typography>
                        <Typography>{`You have: ${FormatNumber(
                            Math.round(
                                counter * DaysPerYear * HoursPerDay * 60 * 60
                            )
                        )} seconds left`}</Typography>
                    </Box>
                    <Box sx={styles.box} display="flex">
                        {setElHeadings().map((el, i) => (
                            <Button
                                key={i}
                                sx={styles.rederedEl}
                                variant="contained"
                            >
                                {el}
                            </Button>
                        ))}
                    </Box>
                </>
            )}
        </>
    )
}

export default Renderer
