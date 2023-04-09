import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Error404 = () => {
  return (
    <div className="container-fluid text-center">
      <Box>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          404 Error <br />
          Page Not Found
        </Typography>
      </Box>
    </div>
  );
};
export default Error404;
