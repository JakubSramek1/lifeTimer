import { Typography } from '@mui/material'
import FormatNumber from '../../helpers/dataManipulation/FormatNumber'
import { FC } from 'react'
import { ERange } from '../../pages/Home'

interface Props {
    left: number
    type: ERange
}

const TextLeft: FC<Props> = ({ left, type }) => {
    return (
        <Typography>{`You have: ${FormatNumber(
            left
        )} ${type} left`}</Typography>
    )
}

export default TextLeft
