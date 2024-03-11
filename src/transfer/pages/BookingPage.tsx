import { Button, Grid, TextField, Typography } from "@mui/material"
import { TransferLayout } from "../layout/TransferLayout"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks"
import { useContext, useState } from "react"
import { TransferContext } from "../../context"
import { TransferService } from "../services"
import Swal from "sweetalert2"

const initialForm = {
  name: "",
  surname: "",
  email: "",
  phone: ""
}

const formValidations = {
  name: [(value: string) => value.length >= 1, 'Name is required'],
  surname: [(value: string) => value.length >= 1, 'Surname is required'],
  email: [(value: string) => value.includes('@'), 'Email is not valid'],
  phone: [(value: string) => value.length >= 1, 'Phone is required']
}

export const BookingPage = () => {
  const {name, surname, email, phone, onInputChange, nameValid, surnameValid, emailValid, phoneValid, isFormValid} = useForm(initialForm, formValidations)
  const {booking, reset} = useContext(TransferContext)
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmitBooking = async () => {
    try {
      setIsLoading(true)

      Swal.fire({
        title: "Creating Booking",
        text: "Please wait, we are creating your booking",
        didOpen: async () => {
          Swal.showLoading();

          const response = await TransferService.postBooking({
            ...booking,
            holder: {
              name,
              surname,
              email,
              phone
            },
            clientReference: `Welcome Mr. ${name} ${surname}`
          })
    
          if (!isLoading) {
            Swal.hideLoading()
            Swal.update({
              icon: 'success',
              title: `Booking ${response.bookings[0].status}`,
              text: `We have created your booking with reference id: ${response.bookings[0].reference}`
            })
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          reset()
          navigate("/")
        }
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error Confirm Booking',
        text: "Please try again"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TransferLayout>
      <Grid container  sx={{mt: 4, maxWidth: 575}} p={2} borderRadius={2} direction={"column"} >
        <Typography variant="h6" p={2} textAlign={"left"} color={"secondary"} fontWeight={700}>Booking Page</Typography>
        <Grid item xs={12} sx={{mt: 2, mb: 2}}>
          <TextField 
            id="name" 
            label="Name" 
            variant="outlined" 
            fullWidth
            name="name"
            value={name}
            onChange={onInputChange}
            error={!!nameValid}
            helperText={nameValid}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2, mb: 2}}>
          <TextField 
            id="surname" 
            label="Surname" 
            variant="outlined" 
            fullWidth
            name="surname"
            value={surname}
            onChange={onInputChange}
            error={!!surnameValid}
            helperText={surnameValid}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2, mb: 2}}>
          <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
            error={!!emailValid}
            helperText={emailValid}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2, mb: 2}}>
          <TextField 
            id="phone" 
            label="Phone" 
            variant="outlined" 
            fullWidth
            name="phone"
            value={phone}
            onChange={onInputChange}
            error={!!phoneValid}
            helperText={phoneValid}
          />
        </Grid>
        <Grid container sx={{mt: 2, mb: 2}} justifyContent={"space-between"}>
          <Grid item>
            <Button onClick={() => navigate("/availability")}>
              Volver
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={!isFormValid} variant="contained" onClick={onSubmitBooking} sx={{borderRadius: 5}}>
              CONFIRM
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </TransferLayout>
  )
}
