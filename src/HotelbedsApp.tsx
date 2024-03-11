import { AppTheme } from "./theme"
import { AppRouter } from "./router/AppRouter"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TransferProvider } from "./context"


const HotelbedsApp = () => {
  return (
    <TransferProvider>
      <AppTheme>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppRouter />
          </LocalizationProvider>
      </AppTheme>
    </TransferProvider>
  )
}

export default HotelbedsApp