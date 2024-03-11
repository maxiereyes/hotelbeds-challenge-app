import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useHttp } from "../../hooks"
import { Terminal } from "../interfaces"

interface Props {
    countryCodeSelected: string,
    onTerminalCodeSelected: (code: string) => void
}

export const TerminalView = ({countryCodeSelected, onTerminalCodeSelected}: Props) => {
    const {data: terminals, loading} = useHttp<Terminal[]>(`/common/terminals?language=es&limit=1000&offset=0&countryCodes=${countryCodeSelected}`)

    const onInputSelectChange = (event: SelectChangeEvent<string>) => {
        onTerminalCodeSelected(event.target.value)
    };

    return (
        
            <FormControl fullWidth>
              <InputLabel id="terminals">{loading ? "Loading..." : "Terminals"}</InputLabel>
              <Select
                labelId="terminals"
                label="Terminals"
                disabled={loading}
                defaultValue={""}
                fullWidth
                name="terminals"
                sx={{
                  mb: 2
                }}
                onChange={onInputSelectChange}
              >
                {
                  terminals && terminals.map(({code, content: {description}}: Terminal) => (
                    <MenuItem key={code} value={code}>{description}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
 
    )
}