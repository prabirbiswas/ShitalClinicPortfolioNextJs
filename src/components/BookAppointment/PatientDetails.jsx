import React, { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  Paper,
} from "@mui/material";

const PatientDetails = ({ visitState, tokenState, ...props }) => {
  const [patientDetail, getPatientDetail] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [resetData, setResetData] = useState(false);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      setLoading(true);
      await fetch(
        process.env.REACT_APP_API_URL +
          "/patient/patientByTokenNo/highestVisit/" +
          props.tokenNo
      )
        .then((res) => res.json())
        .then((data) => {
          getPatientDetail(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchPatientDetails();
  }, [props.tokenNo]);

  const addPatientHandler = async () => {
    setLoading(true);
    patientDetail.visitNo += 1;
    await fetch(process.env.REACT_APP_API_URL + "/patient/addRepeatPatient", {
      method: "POST",
      body: JSON.stringify(patientDetail),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        setLoading(false);
        setResetData(true);
        visitState("");
        tokenState("");
      })
      .then(() => {
        alert("Appointment Book Successfully!")
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const columns = ["Token No", "Patient Name", "Gender", "Age", "Visit No"];

  let dataHTML;

  const handleError = () => {
    visitState("Yes");
    setResetData(true);
  };

  if (isLoading) {
    dataHTML = (
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
  }
  if (patientDetail === null && resetData === false && !isLoading) {
    dataHTML = (
      <Box>
        <div className="error-print">
          <Typography variant="p">Patient Not Found!</Typography>
          <br />
          <Typography variant="p">
            Please enter valid Token Number or you can add new fresh entry.
          </Typography>
        </div>
        <Button
          variant="outlined"
          size="large"
          className="btn-regular"
          onClick={handleError}
        >
          Add New Patient
        </Button>
      </Box>
    );
  }

  if (patientDetail !== null && resetData === false && !isLoading) {
    dataHTML = (
      <Box sx={{ mt: 6, boxShadow: 2, borderRadius: 1 }}>
        <Typography variant="h4" align="center">
          Patient Details
        </Typography>
        <hr />
        <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align="center" key={column}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{patientDetail.tokenNo}</TableCell>
                <TableCell align="center">
                  {patientDetail.patientName}
                </TableCell>
                <TableCell align="center">{patientDetail.gender}</TableCell>
                <TableCell align="center">{patientDetail.age}</TableCell>

                <TableCell align="center">{patientDetail.visitNo}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Button
            className="btn-regular"
            variant="outlined"
            size="medium"
            onClick={addPatientHandler}
          >
            Add Entry
          </Button>
        </Box>
      </Box>
    );
  }

  return dataHTML;
};

export default PatientDetails;
