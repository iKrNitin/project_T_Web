import React from "react";
import Navbar from "../Dashboard/Navbar/Navbar";
import Search from "../Dashboard/Search/Search";
import Slogan from "../Dashboard/Slogan/Slogan";
import TopDestinations from "../Dashboard/Cards/TopDestinations";
import data from "../../../constants/TopDestinations/Data";
import { Box, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Slogan />

      <Grid container justifyContent="space-between">
        {data.map((item, index) => (
          <Grid key={index} item md={6} sm={4} xs={12}>
            <Box p={4}>
              <TopDestinations item={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
