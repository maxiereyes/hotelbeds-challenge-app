/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material"
import { DatePicker, TimePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { useEffect, useState } from "react"

interface Props {
    onDateTimeSelected: (dateTime: string) => void
}

export const DateTimeView = ({onDateTimeSelected}: Props) => {
    const [dateTime, setDateTime] = useState({
        date: null,
        time: null
    })

    useEffect(() => {
        if (!dateTime.date || !dateTime.time) return
        onDateTimeSelected(`${dayjs(dateTime.date).format("YYYY-MM-DD")}T${dayjs(dateTime.time).format("HH:mm:ss")}`)
    }, [dateTime])

  return (
    <Grid container justifyContent={"space-between"} direction={"row"} alignItems={"center"} spacing={2}>
        <Grid item>
            <DatePicker 
                label="Date" 
                value={dateTime.date}
                onChange={(newValue) => {
                    setDateTime({
                        ...dateTime,
                        date: newValue
                    })
                }}
            />
        </Grid>
        <Grid item>
            <TimePicker 
                label="Time" 
                value={dateTime.time}
                onChange={(newValue) => {
                    setDateTime({
                        ...dateTime,
                        time: newValue
                    })
                }}
            />
        </Grid>
    </Grid>
  )
}
