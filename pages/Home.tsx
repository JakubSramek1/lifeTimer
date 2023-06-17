import { DatePicker, LocalizationProvider } from '@mui/lab'
import {
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState, FC } from 'react'
import AppLoading from '../components/feedback/AppLoading'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { CircularProgress } from '@mui/material'

const styles = {
    loadingContainer: {
        marginTop: '90px',
    },
    box: {
        display: 'flex',
        flexWrap: 'wrap',
    },
} as const

enum ERange {
    Day = 'day',
    Week = 'week',
    Year = 'year',
}

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [birthDate, setBirthDate] = useState<Date | null>(null)
    const [amountDays, setAmountDays] = useState<number>(0)
    const [range, setRange] = useState<ERange>(ERange.Year)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    useEffect(() => {
        setIsLoading(true)
        daysLeft()
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [birthDate, range])

    const daysLeft = () => {
        if (!birthDate) {
            setAmountDays(0)
            return
        }

        const xInLifeLeft =
            range === ERange.Day
                ? Math.round(365.25 * 80)
                : range === ERange.Week
                ? Math.round(52.1785 * 80)
                : 80

        const todayDate = new Date()

        // To calculate the time difference of two dates
        const Difference_In_Time = todayDate.getTime() - birthDate.getTime()

        // To calculate the no. of days between two dates
        const Difference_In_Days = Math.round(
            range === ERange.Day
                ? Difference_In_Time / (1000 * 3600 * 24)
                : range === ERange.Week
                ? Difference_In_Time / (1000 * 3600 * 24 * 7)
                : Difference_In_Time / (1000 * 3600 * 24 * 365.25)
        )
        const daysPropablyLeft = Math.round(xInLifeLeft - Difference_In_Days)
        //To display the final no. of days (result)
        if (daysPropablyLeft <= 0) {
            setAmountDays(0)

            return
        }
        setAmountDays(daysPropablyLeft)
    }

    return (
        <>
            {loading ? (
                <>
                    <Typography fontFamily="nexa" fontWeight={400} variant="h1">
                        Life Timer
                    </Typography>
                    <Box sx={styles.loadingContainer}>
                        <AppLoading size="lg" />
                    </Box>
                </>
            ) : (
                <>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            disableFuture
                            label="Zadejte své datum narozeni"
                            value={birthDate}
                            onChange={(newValue: any) => setBirthDate(newValue)}
                            inputFormat="dd.MM.yyyy" // add US format
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <ToggleButtonGroup
                            color="primary"
                            value={range}
                            exclusive
                            onChange={(_, val) => setRange(val)}
                            aria-label="Platform"
                        >
                            <ToggleButton value={ERange.Day}>dny</ToggleButton>
                            <ToggleButton value={ERange.Week}>
                                týdny
                            </ToggleButton>
                            <ToggleButton value={ERange.Year}>
                                roky
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </LocalizationProvider>

                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <Box sx={styles.box}>
                            {[...Array(amountDays)].map((e, i) => (
                                <span className="busterCards" key={i}>
                                    ♦
                                </span>
                            ))}
                        </Box>
                    )}
                </>
            )}
        </>
    )
}

export default Home
