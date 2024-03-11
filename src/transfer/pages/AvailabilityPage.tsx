/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { TransferContext } from "../../context"
import { TransferLayout } from "../layout/TransferLayout"
import { Button, Grid } from "@mui/material"
import { useFetchAvailability } from "../../hooks"
import { useNavigate } from "react-router-dom"
import { ServiceList } from "../components"

const initialFetchProps = {
  titleLoading: "Checking transfer availability",
  textLoading: "Please wait, we are loading the transfer availability",
  titleError: "Error, please try again"
}

export const AvailabilityPage = () => {
  const {transferSearchState, reset} = useContext(TransferContext)
  const {getAvailability, data, isLoading} = useFetchAvailability(initialFetchProps)
  const navigate = useNavigate()

  useEffect(() => {
    if (transferSearchState.fromCode === "" || transferSearchState.toCode === "") {
      navigate("/")
    } else {
      getAvailability(transferSearchState)
    }
  }, [transferSearchState])

  const goToChangeSearch = () => {
    reset()
  }

  return (
    isLoading ? null :
    <TransferLayout>
      <Grid container  sx={{mt: 4, maxWidth: 575}} p={2} borderRadius={2} direction={"column"} >
        <ServiceList data={data} />
        <Button sx={{mt: 4, borderRadius: 5}} variant="contained" onClick={goToChangeSearch}>
            Change Search
        </Button>
      </Grid>
    </TransferLayout>
  )
}
