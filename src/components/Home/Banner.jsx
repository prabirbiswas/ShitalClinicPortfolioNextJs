import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const h1Style = {
  paddingTop: "35px",
  color: "#fff",
  textDecoration: "none",
  fontSize:45,
  fontWeight: 'bold',
  paddingLeft:"10px",
  paddingRight:"10px"
};
const h2Style = {
  color: "#fff",
  textDecoration: "none",
  paddingBottom:"35px",
  paddingLeft:"10px",
  paddingRight:"10px"
};
const Banner = () => {

  return (
    <Container maxWidth="xl" style={{ paddingBottom: "20px" }}>
      <Box sx={{ bgcolor: "#f06699", height: "100%", textAlign: "center" }}>
        <h1 style={h1Style}>
        SHITAL CLINIC 
        </h1>
        <h3 style={h2Style}>
        Dermatology(Skin), Cosmetology, Trichology(Hair)
        <br/>Laser Clinic and Piles Care Center 
        </h3>
      </Box>
    </Container>
  );
};
export default Banner;
