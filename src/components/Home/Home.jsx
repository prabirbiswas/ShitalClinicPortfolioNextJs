import React from "react";
import Banner from "./Banner";
import ClinicPics from "./ClinicPics";
import Doctors from "./Doctors";
import Slogan from "./Slogan";
import Treatment from "./Treatment";
const Home = () => {
  return (
    <div className="content">
      <Banner />
      <ClinicPics />
      <div id="specialities">
        <Treatment />
      </div>
      <Doctors />
      <Slogan />
    </div>
  );
};

export default Home;
