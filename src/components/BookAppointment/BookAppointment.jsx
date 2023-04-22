import React, { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";
import FirstVisit from "./FirstVisit";
import SecondVisit from "./SecondVisit";
import PatientDetails from "./PatientDetails";

function BookAppointment() {
  const [details, setDetails] = useState(false);
  const [firstVisit, setFirstVisit] = useState("");
  const [tokenNo, setTokenNo] = useState("");

  const handleSelectVisit = (e) => {
    setFirstVisit(e.target.value);
    setTokenNo("");
    setDetails(false);
  };

  let visitFlag;

  if (firstVisit === "Yes") {
    visitFlag = <FirstVisit />;
  } else if (firstVisit === "No") {
    visitFlag = <SecondVisit tokenNumber={setTokenNo} details={setDetails} />;
  } else {
    visitFlag = null;
  }

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-md-4 text-center"></div>
        <div className="col-md-4 text-center">
          <h1 style={{ color: "#8446a2" }}>Book an Appointment</h1>
          <Typography variant="h6" className="blink">
            पहिल्यांदा डॉक्टर विजिट साठी आले असाल तर First Visit मध्ये Yes वर
            क्लिक करावे अन्यथा Next Visit वर क्लिक करावे.
          </Typography>
          <br />
          <Typography variant="h6" className="blink">
            अगर आप पहली बार डॉक्टर से मिलने आए हैं तो First Visit पर Yes क्लिक
            करें अन्यथा Next Visit पर क्लिक करें।
          </Typography>
          <br />
          <FormControl>
            <InputLabel>First Visit</InputLabel>
            <Select
              value={firstVisit}
              label="First Visit"
              onChange={handleSelectVisit}
              sx={{ width: 300 }}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">Next Visit</MenuItem>
            </Select>
          </FormControl>
          {visitFlag}
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          {details && (
            <PatientDetails
              tokenNo={tokenNo}
              tokenState={setTokenNo}
              visitState={setFirstVisit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default BookAppointment;
