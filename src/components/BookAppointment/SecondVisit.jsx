import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
const SecondVisit = ({ tokenNumber, details }) => {
  const [tokenNo, setTokenNo] = useState("");
  const handleChange = (e) => {
    setTokenNo(e.target.value);
    details(false);
  };
  const handleChangeToken = () => {
    if (tokenNo !== "") {
      tokenNumber(tokenNo);
      details((current) => !current);
    } else {
      alert("Token Number cannot be empty!");
    }
  };
  return (
    <>
      <br />
      <br />
      <Typography variant="h6" className="blink">
        आपला Token Number तुम्ही डॉक्टरनि दिलेल्या चिठीच्या उजव्या वरच्या बाजूला
        बघू शकता.
        <br />
        Token Number नसेलतर First Visit मधे Yes सिलेक्ट करावे.
      </Typography>

      <Grid mt={3}>
        <FormControl>
          <TextField
            required
            id="outlined-required"
            label="Patient Token No."
            value={tokenNo}
            autoFocus
            onChange={handleChange}
            sx={{ width: 300 }}
          />
        </FormControl>
      </Grid>
      <Grid
        mt={2}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Button
          onClick={handleChangeToken}
          variant="outlined"
          size="large"
          className="btn-regular"
        >
          Find Patient
        </Button>
      </Grid>
    </>
  );
};

export default SecondVisit;
