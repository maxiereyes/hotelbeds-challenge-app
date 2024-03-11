import { Grid, Typography } from "@mui/material"
import { TransferAvailability } from "../interfaces"
import { ServiceListItem } from "../components";
import React, { useState } from "react";


export const TransferAvailabilityView = ({search, services}: TransferAvailability) => {
    const [expanded, setExpanded] = useState<string | false>('');


    const handleChange = (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Grid container spacing={2} justifyContent={"center"} >
      <Typography variant="body2" mt={2}>From {search.from.description} {search.departure.date} {search.departure.time}</Typography>
      <Typography variant="body2">To {search.to.description}</Typography>
        {
            services.map((service) => (
                <ServiceListItem 
                  key={service.id}  
                  expanded={expanded} 
                  contentService={service} 
                  onChangePanel={handleChange} 
                  namePanel={`panel${service.id}`} 
                />
            ))
        }
        
    </Grid>
  )
}
