import React, { useState, useReducer } from "react";
import { Dna } from "react-loader-spinner";

import {
  Typography,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Grid,
} from "@mui/material";

const initialState = {
  data: {
    patientName: "",
    gender: "",
    age: "",
    ageUnit: "Years",
    city: "",
    phoneNumber: "",
    weight: "",
    BP: "false",
    bloodSugar: "false",
    visitNo: "1",
  },
  isLoading: true,
  error: null,
};
const formReducer = (formState, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...formState,
        data: {
          ...formState.data,
          [action.payload.name]: action.payload.value,
        },
      };
    case "FETCH_SUCCESS":
      return {
        ...formState,
        data: action.payload,
        isLoading: false,
      };
    case "FETCH_ERROR":
      return {
        ...formState,
        error: action.payload,
        isLoading: false,
      };
    case "reset":
      return initialState;
    default:
      return formState;
  }
};
const FirstVisit = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [isLoading, setLoading] = useState(false);

  let errflag = 0;
  const dialogMsg = {
    nameErr: "",
    ageErr: "",
    phoneNumberErr: "",
    cityErr: "",
    genderErr: "",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FIELD", payload: { name, value } });
  };

  const {
    patientName,
    gender,
    age,
    ageUnit,
    city,
    phoneNumber,
    weight,
    BP,
    bloodSugar,
  } = formState.data;

  const Registration = async () => {
    if (!patientName.length > 0) {
      dialogMsg.nameErr = "Please Enter Name!\n";
      errflag = 1;
    }
    if (!age.length > 0 && !age.length <= 2) {
      dialogMsg.ageErr = "Please Enter Age between 1 Month to 120 years!\n";
      errflag = 1;
    }
    if (phoneNumber.length !== 10) {
      dialogMsg.phoneNumberErr = "Please Enter 10 digit Phone Number!\n";
      errflag = 1;
    }
    if (!city.length > 0) {
      dialogMsg.cityErr = "Please Enter City Name!\n";
      errflag = 1;
    }
    if (gender === "") {
      dialogMsg.genderErr = "Please Select the Gender!\n";
      errflag = 1;
    }

    if (errflag === 0) {
      setLoading(true);
      try {
        let response = await fetch(
          process.env.REACT_APP_API_URL + "/patient/addPatient",
          {
            method: "POST",
            body: JSON.stringify(formState.data),
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(response.status + "Error");
        }
        if (response.status === 200) {
          setLoading(false);
          alert("Appointment Booked Successfully!");
          dispatch({ type: "reset" });
        }
        await response.json();
      } catch (error) {
        setLoading(false);
        dispatch({ type: "FETCH_ERROR", payload: error });
        alert(error.message);
      }
    } else {
      alert(
        dialogMsg.nameErr +
          dialogMsg.genderErr +
          dialogMsg.phoneNumberErr +
          dialogMsg.ageErr +
          dialogMsg.cityErr
      );
    }
  };

  let patientForm;

  if (isLoading) {
    patientForm = (
      <div className="overlay">
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  } else {
    patientForm = (
      <>
        <br />
        <br />
        <Typography variant="h6" className="blink">
          कृपया आपला पूर्ण नाव वडिल/पतिच्या नावासह टाकावे.
        </Typography>
        <br />
        <Typography variant="h6" className="blink">
          कृपया अपना पूरा नाम पिता/पति के नाम के साथ दर्ज करें।
        </Typography>
        <Grid mt={2}>
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            name="patientName"
            sx={{ width: 300 }}
            onChange={(e) => handleChange(e)}
            value={patientName}
          />
        </Grid>
        <Grid mt={2}>
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <Select
              required
              value={gender}
              name="gender"
              label="Gender"
              sx={{ width: 300 }}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Transgender"}>Transgender</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid mt={2}>
          <TextField
            required
            id="outlined-required"
            label="Age"
            name="age"
            sx={{ width: 210 }}
            onChange={(e) => handleChange(e)}
            value={age}
            type="number"
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 3);
            }}
            min={0}
          />
          <Select
            value={ageUnit}
            label="Age"
            name="ageUnit"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="Month">Month</MenuItem>
            <MenuItem value="Years">Years</MenuItem>
          </Select>
        </Grid>
        <Grid mt={2}>
          <TextField
            required
            id="outlined-required"
            name="phoneNumber"
            label=" Phone Number"
            sx={{ width: 300 }}
            onChange={(e) => handleChange(e)}
            value={phoneNumber}
            type="number"
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            min={0}
          />
        </Grid>
        <Grid mt={2}>
          <TextField
            required
            id="outlined-required"
            label="City"
            name="city"
            sx={{ width: 300 }}
            onChange={(e) => handleChange(e)}
            value={city}
          />
        </Grid>

        <Grid mt={2}>
          <TextField
            label="Weight"
            name="weight"
            value={weight}
            onChange={(e) => handleChange(e)}
            sx={{ width: 300 }}
          />
        </Grid>
        <Grid mt={2}>
          <Typography variant="body1">
            क्या आपको ब्लड प्रेशर की समस्या है?
          </Typography>
          <FormControl>
            <Select
              required
              value={BP}
              name="BP"
              sx={{ width: 300 }}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"true"}>Yes</MenuItem>
              <MenuItem value={"false"}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid mt={2}>
          <FormControl>
            <Typography variant="body1">
              क्या आपको Diabetes की समस्या है?
            </Typography>
            <Select
              required
              value={bloodSugar}
              name="bloodSugar"
              sx={{ width: 300 }}
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"true"}>Yes</MenuItem>
              <MenuItem value={"false"}>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid mt={2}>
          <Button
            variant="contained"
            onClick={Registration}
            style={{ backgroundColor: "#8446a2" }}
          >
            Register
          </Button>
        </Grid>
      </>
    );
  }
  return patientForm;
};
export default FirstVisit;
