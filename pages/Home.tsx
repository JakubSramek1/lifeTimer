import { DatePicker, LocalizationProvider } from '@mui/lab'
import { CircularProgress, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import moment from 'moment'
import React, { useEffect } from 'react'
import AppLoading from '../components/feedback/AppLoading'
import AppTextField from '../components/inputs/AppTextField'
import AppPage from '../components/layout/AppPage'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const styles = {
    loadingContainer: {
        marginTop: '90px',
    },
    box: {
        display: 'flex',
        flexWrap: 'wrap',
    },
} as const

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [birthDate, setBirthDate] = React.useState<string>('02/10/2003')
    const [amountDays, setAmountDays] = React.useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
        daysLeft()
    }, [])

    const daysLeft = () => {
        const numberDaysInLife = Math.round(365.25 * 80)

        const todayDate = moment().format('DD/MM/yyyy')
        const date1 = new Date(todayDate)
        const date2 = new Date(birthDate)

        // To calculate the time difference of two dates
        const Difference_In_Time = date1.getTime() - date2.getTime()
        // To calculate the no. of days between two dates
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)
        //To display the final no. of days (result)
        setAmountDays(Math.round(numberDaysInLife - Difference_In_Days))
    }

    return (
        <>
            {loading ? (
                <>
                    <Typography fontFamily="nexa" fontWeight={400} variant="h1">
                        Life Timer
                    </Typography>
                    <Box sx={styles.loadingContainer}>
                        {' '}
                        <AppLoading size="lg" />
                    </Box>
                </>
            ) : (
                <>
                    {/* <AppTextField
                        label="Zadejte své datum narozeni"
                        onChange={(value) => setBirthDate(value)}
                        value={birthDate}
                    /> */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Zadejte své datum narozeni"
                            value={birthDate}
                            onChange={(newValue) => {
                                setBirthDate(newValue ?? '')
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    {amountDays > 0 && (
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

            {/*TODO: addt date picker */}
        </>
    )
}

export default Home
