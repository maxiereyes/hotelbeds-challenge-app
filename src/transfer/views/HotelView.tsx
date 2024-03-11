import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useHttp } from "../../hooks"
import { Hotel } from "../interfaces"

interface Props {
    countryCodeSelected: string,
    destinationCodeSelected: string,
    onHotelCodeSelected: (code: string) => void
}

export const HotelView = ({countryCodeSelected, destinationCodeSelected, onHotelCodeSelected}: Props) => {
    const {data: hotels, loading} = useHttp<Hotel[]>(`/common/hotels?language=es&limit=1000&offset=0&countryCodes=${countryCodeSelected}&destinationCodes=${destinationCodeSelected}`)

    const onInputSelectChange = (event: SelectChangeEvent<string>) => {
        onHotelCodeSelected(event.target.value)
    };

    return (
        
            <FormControl fullWidth>
              <InputLabel id="hotels">{loading ? "Loading..." : "Hotels"}</InputLabel>
              <Select
                labelId="hotels"
                label="Hotels"
                disabled={loading}
                defaultValue={""}
                fullWidth
                name="hotels"
                sx={{
                  mb: 2
                }}
                onChange={onInputSelectChange}
              >
                {
                  hotels && hotels.map(({code, name}: Hotel) => (
                    <MenuItem key={code} value={code}>{name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
 
    )
}