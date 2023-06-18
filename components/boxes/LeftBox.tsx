import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import secondsLeft, { ILeft } from '../../functions/core/secondsLeft'
import { AverageLifeExpectancy } from '../../definitios/dates/dates'
import { useEffect, useState, FC } from 'react'
import { ERange } from '../../pages/Home'
import TextLeft from '../text/TextLeft'

const styles = {} as const

interface Props {
    birthDate: Date
}

const LeftBox: FC<Props> = ({ birthDate }) => {
    const [counter, setCounter] = useState<ILeft | null>(null)

    useEffect(() => {
        const interval = setInterval(
            () => setCounter(secondsLeft(birthDate)),
            1000
        )
        return () => clearInterval(interval)
    })

    return (
        counter && (
            <Box>
                <TextLeft type={ERange.Year} left={counter.years} />
                <TextLeft type={ERange.Week} left={counter.weeks} />
                <TextLeft type={ERange.Day} left={counter.days} />
                <TextLeft type={ERange.Hour} left={counter.hours} />
                <TextLeft type={ERange.Minute} left={counter.minutes} />
                <TextLeft type={ERange.Second} left={counter.seconds} />
            </Box>
        )
    )
}

export default LeftBox
