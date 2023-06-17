import { Paper } from '@mui/material'
import { ReactNode } from 'react'

const styles = {
    paper: {
        margin: '40px 0',
        maxWidth: '800px',
    },
} as const

interface AppPageProps {
    children: ReactNode
}

const AppPage: React.FC<AppPageProps> = ({ children }) => {
    return <Paper sx={styles.paper}>{children}</Paper>
}

export default AppPage
