import { CircularProgress } from '@mui/material';
import React from 'react'
import { TAppSize } from '../../models/root/models';

const styles = {
  sm: {
    width: '20px !important',
    height: '20px !important'
  },
  md: {
    width: '40px !important',
    height: '40px !important'
  },
  lg: {
    width: '60px !important',
    height: '60px !important'
  },
  xl: {
    width: '80px !important',
    height: '80px !important'
  },
  xxl: {
    width: '100px !important',
    height: '100px !important'
  },
} as const

interface AppLoadingProps {
  size: TAppSize
}

const AppLoading: React.FC<AppLoadingProps> = ({size}) => {
    return (<>
     <CircularProgress sx={size === 'sm' ? styles.sm :
     size === 'md' ? styles.md :
     size === 'lg' ? styles.lg :
     size === 'xl' ? styles.xl :
      styles.xxl 
    } />
    </>);
}

export default AppLoading