import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";

export default function MediaCard({item}) {
  return (
          <Grid container justifyContent='center' sx={{height:'25vh', borderRadius:'5px', overflow:'hidden'}}>
            <Grid item md={3} sm={3} xs={3} sx={{height:'25vh'}}>
              <img 
                style={{ width: '100%', height: '100%', objectFit:'cover'}}
                src={item.image}
                alt="destination"
              />
            </Grid>
            <Grid item md={9} sm={9} xs={9} sx={{maxHeight:'100%'}}>
              <Box sx={{background: "var(--Background)", height:'100%'}}>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ color: "white", textAlign: "center" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  {item.content}
                </Typography>
              </Box>
            </Grid>
          </Grid>
       
  );
}

