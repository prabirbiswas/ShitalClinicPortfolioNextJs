import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const h2Style = {
  paddingTop: "30px",
  color: "#fff",
  textDecoration: "none",
  paddingLeft: "10px",
  paddingRight: "10px",
};
const ClinicIntro = () => {
  const navigate = useNavigate();

  return (
    <Container id="about-us" maxWidth="xl" style={{ paddingTop: "20px" }}>
      <Box sx={{ bgcolor: "#f06699", textAlign: "center" }}>
        <h3 style={h2Style}>
          "The skin is the window to the soul, and a healthy skin reflects a
          healthy soul."
        </h3>
        {/* <h2 style={h2Style}>Visit us in Shital Clinic</h2> */}
        <h2 style={h2Style}>"Your skin, our passion"</h2>
        <h3 style={h2Style}>
          Book Appointment <br />
          Contact us
          <br /> Arjuni Branch(All Days): +91-9689403696
          <br />
          Wadsa Branch(Evening: Monday to Wednesday): +91-9921231668
          <br />
          Devri Branch(Evening: Thursday): +91-7056414141
          <br /> <br />
          To Book Appointment Online &nbsp; 
          <Button
            onClick={() => navigate("/BookAppointment")}
            variant="text"
            style={{ color: "#fff", backgroundColor: "#8624b5" }}
          >
            Click here
          </Button>
          {/* <br/><br/> The Online Booking System will come soon. */}
        </h3>
        <br />
      </Box>
    </Container>
  );
};
export default ClinicIntro;
