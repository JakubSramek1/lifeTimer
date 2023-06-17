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
import Renderer from '../components/renderers/Renderer'

const styles = {
    loadingContainer: {
        marginTop: '90px',
    },
} as const

export enum ERange {
    Day = 'day',
    Week = 'week',
    Year = 'year',
}

const Home: FC = ({}) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [birthDate, setBirthDate] = useState<Date | null>(null)
    const [range, setRange] = useState<ERange>(ERange.Year)

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
                    {birthDate && (
                        <Renderer range={range} birthDate={birthDate} />
                    )}
                </>
            )}
        </>
    )
}

export default Home
