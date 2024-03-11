import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { getFormatPrice } from '../../helpers'
import { Service } from '../interfaces'
import React, { useContext } from 'react'
import { AirportShuttle, Wc, Work } from '@mui/icons-material'
import { TextWithLineBreaks } from '../../components'
import dayjs from 'dayjs'
import { TransferContext } from '../../context'
import { useNavigate } from 'react-router-dom'

interface Props {
    contentService: Service,
    expanded: string | false,
    namePanel: string,
    onChangePanel: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void,
}

export const ServiceListItem = ({contentService, expanded, namePanel, onChangePanel}: Props) => {
    const {transferType, vehicle, price, category, content, cancellationPolicies, rateKey, direction, pickupInformation} = contentService
    const {loadBooking} = useContext(TransferContext)

    const navigate = useNavigate()

    const getIconByDescription = (description: string) => {
        return description.toLowerCase().includes("duracion") ? <AirportShuttle /> :
        description.toLowerCase().includes("pasajero") ? <Wc /> :
        description.toLowerCase().includes("maletas") ? <Work /> : null
    }

    const transferDetailType = 
        (pickupInformation.to.type === "IATA" || pickupInformation.to.type === "ATLAS") ? "FLIGHT" : 
        (pickupInformation.to.type === "PORT") ? "CRUISE" :
        (pickupInformation.to.type === "STATION") ? "TRAIN" : ""
    

    const onLoadBooking = () => {
        loadBooking({
            language: 'es',
            holder: {
                name: '',
                surname: '',
                email: '',
                phone: ''
            },
            transfers: [
                {
                    rateKey,
                    transferDetails: [
                        {
                            type: transferDetailType,
                            direction,
                            code: pickupInformation.to.code,
                            companyName: ""
                        }
                    ]
               }
            ],
            clientReference: "",
            remark: "Booking remarks go here"
        })

        navigate('/booking')
    }

  return (
    <Grid item xs={12}>
        <Accordion expanded={expanded === namePanel} onChange={onChangePanel(namePanel)}>
            <AccordionSummary >
                <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item xs={6}>
                        <Box>
                            <Typography component="div" variant="h5">
                                {vehicle.name} - <small>{category.name}</small>
                            </Typography>
                            <Typography variant="subtitle2" color="primary" component="div">
                                {transferType}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <Typography color="secondary">{getFormatPrice({price: price.totalAmount, currencyId: price.currencyId})}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            loading="lazy"
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            src={content.images.length ? content.images[0].url : "https://via.placeholder.com/150"}
                            alt={vehicle.name}
                        />
                    </Grid>
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Divider sx={{mb: 2}} />
                {
                    content.transferDetailInfo && content.transferDetailInfo.map((info, index) => (
                        <List key={`info-${index}`} disablePadding>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    {getIconByDescription(info.description)}
                                </ListItemIcon>
                                <ListItemText primary={info.description}  />
                            </ListItem>
                        </List>
                    ))
                }
                <Divider sx={{mb: 2, mt: 2}} />
                <Typography variant='subtitle1' color={"primary"} mb={2}>Details:</Typography>
                <TextWithLineBreaks text={content.transferRemarks && content.transferRemarks[0]?.description} />
                <Divider sx={{mb: 2, mt: 2}} />
                {
                    cancellationPolicies && cancellationPolicies.map((policy, index) => (
                        <Box key={`policy-${index}`} sx={{borderRadius: 5, p: 2}}>
                            <Typography variant='subtitle1' color={"secondary"}>Cancellation Policies</Typography>
                            <List disablePadding>
                                <ListItem disablePadding>
                                    <ListItemText 
                                        primary={` Free until: ${dayjs(policy.from).format("DD/MM/YYYY")} - ${dayjs(policy.from).format("HH:mm")}`}
                                        secondary={`After date: ${getFormatPrice({price: policy.amount, currencyId: policy.currencyId})}`}
                                       />
                                </ListItem>
                            </List>
                        </Box>
                    ))
                }
                <Divider sx={{mb: 2, mt: 2}} />
                <Button onClick={onLoadBooking} fullWidth variant='contained' sx={{mt: 2, borderRadius: 5}} color='secondary' >
                    Reserve
                </Button>
            </AccordionDetails>
        </Accordion>
    </Grid>
  )
}
