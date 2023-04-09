import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import skin from "../images/Home/skin.jpg";
import hair from "../images/Home/hair.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
// import apiUrl from "./api/api"
const SkinTreatment = () => {
  const [skinTreatment, setSkinTreatment] = useState([]);
  const [hairTreatment, setHairTreatment] = useState([]);

  useEffect(() => {
    fetchSkinTreatment();
    fetchHairTreatment();
  }, []);

  const fetchSkinTreatment = () => {
    // apiUrl
    //   .get("/skinTreatments")
    //   .then((res) => {
    //       (res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const data= [
      {
          "id": 1,
          "treatmentNameHin": "फुंसी",
          "treatmentNameEng": "Pimple/Black Heads"
      },
      {
          "id": 2,
          "treatmentNameHin": "वांग",
          "treatmentNameEng": "Melasma"
      },
      {
          "id": 3,
          "treatmentNameHin": "कायाकल्प उपचार",
          "treatmentNameEng": "Rejuvenate Treatment"
      },
      {
          "id": 4,
          "treatmentNameHin": "केमिकल पिलिंग ट्रीटमेंट [काले धब्बे के लिए]",
          "treatmentNameEng": "Chemical Peeling Treatment [Dark Spots]"
      },
      {
          "id": 5,
          "treatmentNameHin": "कार्बन फेश्यल",
          "treatmentNameEng": "Carbon Facial"
      },
      {
          "id": 6,
          "treatmentNameHin": "BB ग्लो ट्रीटमेंट",
          "treatmentNameEng": "BB Glow Treatment"
      },
      {
          "id": 7,
          "treatmentNameHin": "झुर्रियों का इलाज",
          "treatmentNameEng": "Wrinkles Treatment"
      },
      {
          "id": 8,
          "treatmentNameHin": "टेनिंग उपचार",
          "treatmentNameEng": "Tanning Treatment"
      },
      {
          "id": 9,
          "treatmentNameHin": "त्वचा की पॉलिशिंग",
          "treatmentNameEng": "Skin Polishing"
      },
      {
          "id": 10,
          "treatmentNameHin": "ओक्ष्य्गेनो ट्रीटमेंट",
          "treatmentNameEng": "Oxygeneo Treatment"
      },
      {
          "id": 11,
          "treatmentNameHin": "त्वचा उठाना",
          "treatmentNameEng": "Skin Lifting"
      },
      {
          "id": 12,
          "treatmentNameHin": "काली गर्दन",
          "treatmentNameEng": "Black Neck"
      },
      {
          "id": 13,
          "treatmentNameHin": "काले अंडरआर्म्स",
          "treatmentNameEng": "Black Underarms"
      },
      {
          "id": 14,
          "treatmentNameHin": "आँखों के नीचे काले घेरे",
          "treatmentNameEng": "Black Circles under eyes"
      }
  ]
  setSkinTreatment(data);
  };

  const fetchHairTreatment = () => {
    // apiUrl
    //   .get("/hairTreatments")
    //   .then((res) => {
    //     setHairTreatment(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const data = [
      {
          "id": 1,
          "treatmentNameHin": "प्लेटलेट रिच प्लाजमा [PRP] थेरपी",
          "treatmentNameEng": "Platelet Rich Plasma [PRP] Thereapy"
      },
      {
          "id": 2,
          "treatmentNameHin": "उम्र से पहले सफेद बाल",
          "treatmentNameEng": "White Hair before Age"
      },
      {
          "id": 3,
          "treatmentNameHin": "PRP का उपयोग कर बालों के झड़ने का उपचार",
          "treatmentNameEng": "Treatment of Hair Loss using PRP"
      },
      {
          "id": 4,
          "treatmentNameHin": "स्थायी बाल निकालना",
          "treatmentNameEng": "Permanent Hair Removal"
      },
      {
          "id": 5,
          "treatmentNameHin": "स्थायी चेहरे के बालों को हटाने",
          "treatmentNameEng": "Permanent Facial Hair Removal"
      },
      {
          "id": 6,
          "treatmentNameHin": "स्थायी ऊपरी होंठ बालों को हटाने",
          "treatmentNameEng": "Permanent Upper Lip Hair Removal"
      },
      {
          "id": 7,
          "treatmentNameHin": "स्थायी अंडरआर्म बाल निकालना",
          "treatmentNameEng": "Permanent Underarm Hair Removal"
      },
      {
          "id": 8,
          "treatmentNameHin": "स्थायी बिकनी बालों को हटाने",
          "treatmentNameEng": "Permanent Bikini Hair Removal"
      }
  ]

  setHairTreatment(data);
  };
  return (
    <div
      id="Specialities"
      className="container-fluid text-center"
      style={{ paddingTop: 70 }}
    >
      <Box
        className="border-gradient border-gradient-purple"
        component="h4"
        sx={{
          margin: "auto",
          width: 250,
          height: 50,
          p: 1,
          color: "#7f7880",
        }}
      >
        OUR SPECIALITIES
      </Box>
      <div className="row ">
        <div className="col-md-2 "></div>
        <div className="col-md-4 ">
          <br />
          <Card
            sx={{ maxWidth: 500, backgroundColor: "#f06699", height: "100%" }}
          >
            <CardMedia
              component="img"
              alt="Skin Treatment"
              height="140"
              image={skin}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#ffffff"
              >
                <u>Skin Treatment (त्वचा उपचार)</u>
              </Typography>
              {skinTreatment.map((treatment) => (
                <div key={treatment.id}>
                  <Typography variant="h6" color="#ffffff">
                    {treatment.treatmentNameEng +
                      " (" +
                      treatment.treatmentNameHin +
                      ")"}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="col-md-4 ">
          <br />
          <Card
            sx={{ maxWidth: 500, backgroundColor: "#8624b5", height: "100%" }}
          >
            <CardMedia
              component="img"
              alt="केस उपचार"
              height="140"
              image={hair}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#ffffff"
              >
                <u>Hair Treatment (केश उपचार)</u>
              </Typography>
              {hairTreatment.map((treatment) => (
                <div key={treatment.id}>
                  <Typography variant="h6" color="#ffffff">
                    {treatment.treatmentNameEng}
                    {" (" + treatment.treatmentNameHin + ")"}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <br />
      </div>
    </div>
  );
};
export default SkinTreatment;
