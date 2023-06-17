import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { ERange } from '../../pages/Home'
import daysLeft from '../../functions/core/DaysLeft'

const styles = {
    box: {
        display: 'flex',
        flexWrap: 'wrap',
    },
} as const

interface Props {
    birthDate: Date
    range: ERange
}

const Renderer: FC<Props> = ({ birthDate, range }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [amountDays, setAmountDays] = useState<number>(0)

    useEffect(() => {
        setIsLoading(true)
        daysLeft(birthDate, range, setAmountDays)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [birthDate, range])

    return (
        <>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <Box sx={styles.box}>
                    {[...Array(amountDays)].map((_, i) => (
                        <span className="busterCards" key={i}>
                            ♦
                        </span>
                    ))}
                </Box>
            )}
        </>
    )
}

export default Renderer
