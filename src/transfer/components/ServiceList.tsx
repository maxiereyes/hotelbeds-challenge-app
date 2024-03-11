import { Grid, Typography } from '@mui/material'
import { TransferAvailability } from '../interfaces'
import { TransferAvailabilityView } from '../views'

export const ServiceList = ({data}: {data: TransferAvailability | null}) => {
  return (
    (data && data.search && data.services && data.services.length) ?
    <>
        <Typography variant="h6" p={2} textAlign={"center"} color={"secondary"} fontWeight={700}>Select transfer for see more details</Typography>
        <Grid item xs={12}>
            <TransferAvailabilityView search={data?.search} services={data?.services} />
        </Grid>
    </> : <Typography variant="h6" p={2} textAlign={"left"} color={"secondary"}>Not found availability for this search</Typography>
  )
}
