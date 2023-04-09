import * as React from "react";
import tarun from "../images/Home/DrTarun.jpg";

import { Box, Typography, Container, CardMedia } from "@mui/material";
const style1 = {
  color: "#fff",
  position: "relative",
  top: "0.1rem",
  margin: "0.5rem 1rem",
  fontWeight: "bold",
};
const style2 = {
  color: "#fff",
  position: "relative",
  top: "0.1rem",
  margin: "0 1.4rem",
};
const style3 = {
  color: "#fff",
  position: "relative",
  top: "0.1rem",
  margin: "0 1.4rem",
  paddingBottom:"20px"
};
const Doctors = () => {
  return (
    <Container id="doctors" maxWidth="xl" style={{ paddingTop: "70px" }}>
      <Box
        className="border-gradient border-gradient-purple"
        component="h4"
        sx={{
          display: "flex",
          margin: "auto",
          width: 250,
          height: 50,
          p: 1,
          color: "#7f7880",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"20px"
        }}
      >
        Doctor
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#8624b5",
        }}
        id="Top"
      >
        <CardMedia
          component="img"
          image={tarun}
          sx={{
            paddingTop:"20px",
            width: "280px",
            borderRadius: "50%",
            borderColor: "primary",
            borderWidth: "2px",
          }}
        />

        <Typography
          variant="h4"
          align="center"
          style={style1}
        >
          Dr. Tarun Mandal
        </Typography>
        <Typography variant="h5" align="center" style={style2}>
          B.A.M.S - Raipur
        </Typography>
        <Typography variant="h5" align="center" style={style2}>
          C.S.D (Dermatology) - Mumbai
        </Typography>
        <Typography variant="h5" align="center" style={style3}>
          C.C.A.T (Cosmoasthetic & Trichologist) - Pune
        </Typography>
      </Box>
    </Container>
  );
};
export default Doctors;
