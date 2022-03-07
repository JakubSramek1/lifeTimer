import { CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import AppLoading from '../components/feedback/AppLoading'
import AppPage from '../components/layout/AppPage'

const styles = {
    loadingContainer: {
        marginTop: '90px',
    },
} as const

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    const [loading, setLoading] = React.useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {loading && (
                <>
                    <Typography fontFamily="nexa" fontWeight={400} variant="h1">
                        Life Timer
                    </Typography>
                    <Box sx={styles.loadingContainer}>
                        {' '}
                        <AppLoading size="lg" />
                    </Box>
                </>
            )}
        </>
    )
}

export default Home
