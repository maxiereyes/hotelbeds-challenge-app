import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useHttp } from "../../hooks"
import { Country } from "../interfaces"
import { getFlagByCountryCode } from "../../helpers"

export const CountryView = ({onCountryCodeSelected}: {onCountryCodeSelected: (code: string) => void}) => {
    const {data: countries, loading} = useHttp<Country[]>("/common/countries")

    const onInputSelectChange = (event: SelectChangeEvent<string>) => {
        onCountryCodeSelected(event.target.value)
    };

    return (
        
            <FormControl fullWidth sx={{
              mb: 2
            }}>
              <InputLabel id="countries">{loading ? "Loading..." : "Countries"}</InputLabel>
              <Select
                labelId="countries"
                label="Countries"
                disabled={loading}
                defaultValue={""}
                fullWidth
                name="countries"  
                onChange={onInputSelectChange}
              >
                {
                  countries && countries.map(({code, name}: {code: string, name: string}) => (
                    <MenuItem key={code} value={code}>{`${getFlagByCountryCode(code)} ${name}`}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
        
    )
}
