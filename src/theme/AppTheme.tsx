import { CssBaseline, ThemeProvider } from "@mui/material"
import { theme } from "./theme"


export const AppTheme = ({children}: {children: JSX.Element}) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
