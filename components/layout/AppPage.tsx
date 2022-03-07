import { Paper } from '@mui/material';
import React from 'react'

const styles = {
  paper: {
    margin: '40px 0',
    maxWidth: '800px',

  }
} as const

interface AppPageProps {
  content: JSX.Element
}

const AppPage: React.FC<AppPageProps> = ({content}) => {
    return (<>
    <Paper sx={styles.paper}>
      {content}
    </Paper>
    </>);
}

export default AppPage