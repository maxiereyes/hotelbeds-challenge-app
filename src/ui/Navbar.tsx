import { AirportShuttle } from "@mui/icons-material"
import { AppBar, Box, Typography } from "@mui/material"


export const Navbar = ({navbarHeight}: {navbarHeight: number}) => {
  return (
    <AppBar position="sticky" color="primary" sx={{ height: navbarHeight, justifyContent: 'center', p: 2}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AirportShuttle sx={{ mr: 2 }} fontSize="large" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hotelbeds Transfer Challenge
            </Typography>
        </Box>
    </AppBar>
  )
}
