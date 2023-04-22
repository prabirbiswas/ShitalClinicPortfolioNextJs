import * as React from "react";
import { Container, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const h1Style = {
  paddingTop: "35px",
  color: "#fff",
  textDecoration: "none",
  fontSize: 45,
  fontWeight: "bold",
  paddingLeft: "10px",
  paddingRight: "10px",
};
const h2Style = {
  color: "#fff",
  textDecoration: "none",
  paddingBottom: "35px",
  paddingLeft: "10px",
  paddingRight: "10px",
};
const Banner = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" style={{ paddingBottom: "20px" }}>
      <Box sx={{ bgcolor: "#f06699", height: "100%", textAlign: "center" }}>
        <h1 style={h1Style}>SHITAL CLINIC</h1>
        <h3 style={h2Style}>
          Dermatology(Skin), Cosmetology, Trichology(Hair)
          <br />
          Laser Clinic and Piles Care Center
        </h3>
        <h3 style={h2Style}>
          To Book Appointment Online &nbsp;
          <Button
            onClick={() => navigate("/BookAppointment")}
            variant="text"
            style={{ color: "#fff", backgroundColor: "#8624b5" }}
          >
            Click here
          </Button>
        </h3>
      </Box>
    </Container>
  );
};
export default Banner;
