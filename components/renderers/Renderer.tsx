import { Box } from '@mui/system'
import { Button, CircularProgress } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { ERange } from '../../pages/Home'
import LeftBox from '../boxes/LeftBox'
import secondsLeft, { ILeft } from '../../functions/core/secondsLeft'

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
                    <LeftBox birthDate={birthDate} />
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
