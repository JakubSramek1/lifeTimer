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
import Renderer from '../components/renderers/Renderer'
import LeftBox from '../components/boxes/LeftBox'
import { AverageLifeExpectancy } from '../definitios/dates/dates'
import { useTranslation } from 'react-i18next'

const styles = {
    loadingContainer: {
        marginTop: '90px',
    },
    toggleButton: {
        ml: 1,
    },
} as const

export enum ERange {
    Second = 'second',
    Minute = 'minute',
    Hour = 'hour',
    Day = 'day',
    Week = 'week',
    Month = 'month',
    Year = 'year',
}

const Home: FC = ({}) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [birthDate, setBirthDate] = useState<Date | null>(null)
    const [range, setRange] = useState<ERange>(ERange.Year)
    const { t } = useTranslation()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {loading ? (
                <>
                    <Typography fontFamily="nexa" fontWeight={400} variant="h1">
                        {t('loading.heading')}
                    </Typography>
                    <Box sx={styles.loadingContainer}>
                        <AppLoading size="lg" />
                    </Box>
                </>
            ) : (
                <>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Typography
                            fontFamily="nexa"
                            fontWeight={400}
                            variant="h3"
                            mb={6}
                        >
                            {t('home.heading')}
                        </Typography>
                        <Typography mb={2} variant="h6">
                            {t('home.lifeExpectancy')}
                            <b> {AverageLifeExpectancy}</b> {t('common.years')}
                        </Typography>
                        <Typography mb={2} variant="h6">
                            {t('home.howMuchLeft')}
                        </Typography>
                        <Box display="flex">
                            <DatePicker
                                disableFuture
                                label={t('home.enterBirthDate')}
                                value={birthDate}
                                onChange={setBirthDate}
                                inputFormat="dd.MM.yyyy" // add US format
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                            <ToggleButtonGroup
                                sx={styles.toggleButton}
                                color="primary"
                                value={range}
                                exclusive
                                onChange={(_, val) => setRange(val)}
                            >
                                {/* <ToggleButton value={ERange.Day}>
                                    {ERange.Day}
                                </ToggleButton>
                                <ToggleButton value={ERange.Week}>
                                    {ERange.Week}
                                </ToggleButton> */}
                                <ToggleButton value={ERange.Year}>
                                    {t('common.years')}
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </LocalizationProvider>
                    {birthDate && (
                        <>
                            <LeftBox birthDate={birthDate} />
                            <Renderer range={range} birthDate={birthDate} />
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default Home
