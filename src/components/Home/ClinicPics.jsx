import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import PIC1 from "../images/Home/1.jpg";
import PIC2 from "../images/Home/2.jpg";
import PIC3 from "../images/Home/3.jpg";
import PIC4 from "../images/Home/4.jpg";

const ClinicPics = () => {
  return (
    <AwesomeSlider>
      <div data-src={PIC1} />
      <div data-src={PIC2} />
      <div data-src={PIC3} />
      <div data-src={PIC4} />
    </AwesomeSlider>
  );
};

export default ClinicPics;
