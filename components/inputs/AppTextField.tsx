import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'

interface AppTextFieldProps {
    label: string
    onChange: (value: string) => void
    value: string
}

const AppTextField: React.FC<AppTextFieldProps> = ({
    label,
    value,
    onChange,
}) => {
    return (
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">{label}</InputLabel>
            <Input
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </FormControl>
    )
}

export default AppTextField
