import { Grid} from "@mui/material"
import { Navbar } from "../../ui"

const navbarHeight = 64

export const TransferLayout = ({children}: {children: JSX.Element}) => {
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      sx={{ minHeight: '100dvh' }}
    >
      <Navbar navbarHeight={navbarHeight} />

      
      {children}
    </Grid>
  )
}
