import React, { useContext, useState } from "react"
import { Button, Grid, Typography } from "@mui/material"
import { CountryView, DateTimeView, DestinationView, FromToTransfer, HotelView, PaxesView, TerminalView } from "../views"
import { TransferLayout } from "../layout/TransferLayout"
import { TransferContext } from "../../context"
import { useNavigate } from "react-router-dom"

const initialState = {
  countryCode: "",
  destinationCode: "",
  terminalCode: "",
  hotelCode: "",
  fromType: "",
  toType: "",
  dateOutbound: "" ,
  adults: 0,
  children: 0,
  infants: 0
}

export const TransferPage = () => {
  const {load, reset} = useContext(TransferContext)

  const [selectState, setSelectState] = useState(initialState)

  const navigate = useNavigate()


  const onSubmit = (event : React.FormEvent) => {
    event.preventDefault()
    
    load({
      language: 'es',
      fromType: selectState.fromType,
      toType: selectState.toType,
      fromCode: selectState.fromType === "ATLAS" ? selectState.hotelCode : selectState.terminalCode,
      toCode: selectState.toType === "ATLAS" ? selectState.hotelCode : selectState.terminalCode,
      outbound: selectState.dateOutbound,
      adults: selectState.adults,
      infants: selectState.infants,
      children: selectState.children
    })

    navigate("/availability")
  }

  const onResetSearch = () => {
    reset()
    setSelectState(initialState)
  }

  
  return (
    <TransferLayout>
      <Grid container spacing={2} sx={{mt: 4, maxWidth: 575}} boxShadow={2} p={2} borderRadius={2} direction={"column"} >
        <Typography variant="h6" p={2} textAlign={"left"} color={"secondary"} fontWeight={700}>Transfer Availability</Typography>
        <Grid item xs={12}>
          <CountryView onCountryCodeSelected={(value) => setSelectState({...selectState, countryCode: value})}/>

          {
            selectState.countryCode && 
              <DestinationView 
                countryCodeSelected={selectState.countryCode} 
                onDestinationCodeSelected={(value) => setSelectState({...selectState, destinationCode: value})}  
              />
          }

          {
            selectState.destinationCode && 
              <FromToTransfer 
                title="From:" 
                onSelected={(value) => setSelectState({...selectState, fromType: value, toType: value === "ATLAS" ? "IATA" : "ATLAS"})} 
              />
            }
            {
              selectState.fromType === "ATLAS" ?
                <>
                  <HotelView countryCodeSelected={selectState.countryCode} destinationCodeSelected={selectState.destinationCode} onHotelCodeSelected={(value) => setSelectState({...selectState, hotelCode: value})} />
                  <TerminalView countryCodeSelected={selectState.countryCode} onTerminalCodeSelected={(value) => setSelectState({...selectState, terminalCode: value})} /> 
                </> :
                selectState.fromType === "IATA" &&
                <>
                  <TerminalView countryCodeSelected={selectState.countryCode} onTerminalCodeSelected={(value) => setSelectState({...selectState, terminalCode: value})} /> 
                  <HotelView countryCodeSelected={selectState.countryCode} destinationCodeSelected={selectState.destinationCode} onHotelCodeSelected={(value) => setSelectState({...selectState, hotelCode: value})} />
                </>
            }
            {
              selectState.hotelCode && selectState.terminalCode && 
                <>
                  <DateTimeView onDateTimeSelected={(value) => setSelectState({...selectState, dateOutbound: value})} />
                  <PaxesView onSelectedPaxes={(adults, children, infants) => setSelectState({...selectState, adults, children, infants})} />
                </>
            }

            <Grid container spacing={2} sx={{mt: 4}}>
              <Grid item xs={6}>
                <Button disabled={!selectState.fromType || !selectState.toType || !selectState.dateOutbound} onClick={onSubmit} fullWidth color="primary" variant="contained" sx={{borderRadius: 20}} >
                    Search
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={onResetSearch} fullWidth color="secondary" variant="text" sx={{borderRadius: 20}}>
                    Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </TransferLayout>
  )
}
