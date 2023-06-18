import { Typography } from '@mui/material'
import FormatNumber from '../../helpers/dataManipulation/FormatNumber'
import { FC } from 'react'
import { ERange } from '../../pages/Home'
import { useTranslation } from 'react-i18next'

interface Props {
    left: number
    type: ERange
}

const TextLeft: FC<Props> = ({ left, type }) => {
    const { t } = useTranslation()
    return (
        <Typography>{`${t('textLeft.1')} ${FormatNumber(left)} ${type} ${t(
            'textLeft.2'
        )}`}</Typography>
    )
}

export default TextLeft
