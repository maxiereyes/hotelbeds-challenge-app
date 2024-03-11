import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"

interface Props {
    name: string,
    radioValues: {
        value: string,
        label: string
    }[],
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SelectFromToType = ({name, radioValues, value, onChange}: Props) => {
    return (
        <FormControl>
            <RadioGroup
                row
                name={name}
                value={value}
                onChange={onChange}
            >
                {
                    radioValues.map((radioValue) => (
                        <FormControlLabel key={radioValue.value} value={radioValue.value} control={<Radio />} label={radioValue.label} />
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}
