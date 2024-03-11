/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, TextField } from "@mui/material"
import { useEffect, useState } from "react"


const initialState = {
    adults: 0,
    children: 0,
    infants: 0
}

interface Props {
    onSelectedPaxes: (adults: number, children: number, infants: number) => void
} 

export const PaxesView = ({onSelectedPaxes}: Props) => {
    const [paxes, setPaxes] = useState(initialState)

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setPaxes({
            ...paxes,
            [ name ]: value
        });
    }

    useEffect(() => {
        onSelectedPaxes(paxes.adults, paxes.children, paxes.infants)
    }, [paxes])

  return (
    <Grid container justifyContent={"space-between"} sx={{mt: 1}} spacing={2}>
        <Grid item xs={4}>
            <TextField 
            name="adults"
            type="number"
            label="Adults +18"
            variant="outlined"
            fullWidth
            value={paxes.adults}
            InputProps={{
                inputProps: {
                min: 0
                }
            }}
            onChange={onInputChange}
            />
        </Grid>
        <Grid item xs={4}>
            <TextField 
            name="children"
            type="number"
            label="Children 4~17"
            variant="outlined"
            fullWidth
            value={paxes.children}
            InputProps={{
                inputProps: {
                min: 0
                }
            }}
            onChange={onInputChange}
            />
        </Grid>
        <Grid item xs={4}>
            <TextField 
            name="infants"
            type="number"
            label="Infants 0~3"
            variant="outlined"
            fullWidth
            value={paxes.infants}
            InputProps={{
                inputProps: {
                min: 0
                }
            }}
            onChange={onInputChange}
            />
        </Grid>
    </Grid>
  )
}
