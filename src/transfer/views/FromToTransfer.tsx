/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from "@mui/material"
import { SelectFromToType } from "../components"
import { useEffect, useState } from "react"

interface Props {
    title?: string | ""
    onSelected: (value: string) => void
}

export const FromToTransfer = ({title, onSelected}: Props) => {
    const [selectedFromType, setSelectedFromType] = useState("")

    useEffect(() => {
        onSelected(selectedFromType)
    }, [selectedFromType])

    return (
        <Grid container direction={"row"} alignItems={"center"} sx={{mb: 2}}>
            {
                title && <Typography color={"secondary"} fontWeight={700} sx={{mr: 2}}>{title}</Typography>
            }
            <SelectFromToType 
                name="fromType"
                radioValues={[
                    {
                        value: "ATLAS",
                        label: "Hotel"
                    },
                    {
                        value: "IATA",
                        label: "Airport"
                    }
                ]}
                value={selectedFromType}
                onChange={(event) => setSelectedFromType(event.target.value)}
            />
        </Grid>
    )
}
