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
import { useTranslation } from 'react-i18next'
import { createTimelineData } from '../../helpers/dataManipulation/CreateTimelineData'

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
    const [amountTime, setAmountTime] = useState<ILeft | null>(null)
    const { t } = useTranslation()

    useEffect(() => {
        setIsLoading(true)
        setAmountTime(secondsLeft(birthDate))
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [birthDate, range])

    return isLoading ? (
        <CircularProgress />
    ) : (
        <>
            <Box sx={styles.box} display="flex">
                <Timeline position="left">
                    {createTimelineData(amountTime, range).map((el, i) => {
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
            <Typography variant="h3">{t('home.end')}</Typography>
        </>
    )
}

export default Renderer
