import { Box } from '@mui/system'
import { CircularProgress, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { ERange } from '../../pages/Home'
import secondsLeft, { ILeft } from '../../functions/core/secondsLeft'
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from '@mui/lab'

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
    const [amountDays, setAmountDays] = useState<ILeft | null>(null)

    useEffect(() => {
        setIsLoading(true)
        setAmountDays(secondsLeft(birthDate))
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [birthDate, range])

    const setElHeadings = (): any[] => {
        if (!amountDays) return []
        const arr: any = []
        if (range === ERange.Year) {
            for (let i = 0; i < amountDays.years; i++) {
                arr.push(2022 + arr.length)
            }
            return arr
        } else if (range === ERange.Week) {
            for (let i = 0; i < amountDays.weeks; i++) {
                arr.push(`week ${arr.length}`)
            }
            return arr
        } else {
            for (let i = 0; i < amountDays.days; i++) {
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
                    <Box sx={styles.box} display="flex">
                        <Timeline position="left">
                            {setElHeadings().map((el, i) => {
                                return (
                                    <TimelineItem key={i}>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>{el}</TimelineContent>
                                    </TimelineItem>
                                )
                            })}
                        </Timeline>
                    </Box>
                    <Typography variant="h3">The End</Typography>
                </>
            )}
        </>
    )
}

export default Renderer
