import React from "react";
import logo from "./ShitalCliniclogo.png";
import "./App.css";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#f06699", p: 2, m: 5 }}>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs ={3}>
          <img src={logo} alt="logo" style={{ height: 300 }} />
        </Grid>
        <Grid item  xs ={3} sx={{color:"#fff"}}>
          <h2>Welcome to Shital Clinic</h2>
          <h2>We Are under Maintainance!</h2>
          <h2>We will back soon!</h2>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
