import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useHttp } from "../../hooks"
import { Destination } from "../interfaces"

export const DestinationView = ({onDestinationCodeSelected, countryCodeSelected}: {onDestinationCodeSelected: (code: string) => void, countryCodeSelected: string}) => {
    const {data: destinations, loading} = useHttp<Destination[]>(`/common/destinations?language=es&countryCodes=${countryCodeSelected}&limit=1000&offset=0`)

    const onInputSelectChange = (event: SelectChangeEvent<string>) => {
        onDestinationCodeSelected(event.target.value)
    };

    return (
        
            <FormControl fullWidth sx={{mb: 2}}>
              <InputLabel id="destinations">{loading ? "Loading..." : "Destinations"}</InputLabel>
              <Select
                labelId="destinations"
                label="Destinations"
                disabled={loading}
                defaultValue={""}
                fullWidth
                name="destinations"
                onChange={onInputSelectChange}
              >
                {
                  destinations && destinations.map(({code, name}: Destination) => (
                    <MenuItem key={code} value={code}>{`${name}`}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>

    )
}
