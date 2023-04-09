import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer
      className="page-footer font-small blue pt-4"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="container-fluid  text-md-left">
        <div className="row">
          <h3
            className="text-uppercase text-center"
            style={{ color: "#cd408f" }}
          >
            Shital Clinic
          </h3>
          <div className="col-md-9 mt-md-0 mt-3 text-center  ">
            <h4 className="text-uppercase">Address</h4>
            <div className="row">
              <div className="col-md-3 mt-md-0 mt-3 text-center  ">
                <h5>Arjuni Branch</h5>
                <p>
                  Durga Chowk Premises,
                  <br />
                  Morgaon Road,
                  <br />
                  Arjuni/Mor
                  <br />
                  District: Gondia <br />
                  State: Maharashtra
                </p>
              </div>
              <div className="col-md-1 mt-md-0 mt-3 text-center  ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14917.310440599089!2d80.0273293!3d20.8184732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb484e53be46bf4b!2sShital%20Clinic!5e0!3m2!1sen!2sin!4v1672990970017!5m2!1sen!2sin"
                  style={{ width: 100, height: 200 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arjuni Map"
                ></iframe>
              </div>
              <div className="col-md-3 mt-md-0 mt-3 text-center  ">
                <h5>Wadsa Branch</h5>
                <p>
                  In above of Das Medical,
                  <br />
                  Armori Road,
                  <br />
                  Wadsa
                  <br />
                  District: Gadchiroli <br />
                  State: Maharashtra
                </p>
              </div>
              <div className="col-md-2 mt-md-0 mt-3 text-center  ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.7677378236643!2d79.96339966597665!3d20.623072003604396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2c8577daffffff%3A0x82ddcda200848c0e!2sDas%20Medical!5e0!3m2!1sen!2sin!4v1672992678498!5m2!1sen!2sin"
                  style={{ width: 100, height: 200 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wadsa Map"
                ></iframe>
              </div>
              <div className="col-md-3 mt-md-0 mt-3 text-center  ">
                <h5>Devri Branch</h5>
                <p>
                  Devpuri,
                  <br />
                  Near Manoharbhai Patel College,
                  <br />
                  Chichgad Road,
                  <br />
                  Devri
                  <br /> District: Gondia <br />
                  State: Maharashtra
                </p>
              </div>
            </div>
          </div>
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="col-md-3 mb-md-0 mb-3  text-center">
            <h4 className="text-uppercase">Social</h4>
            <SocialIcon url="https://www.instagram.com/prabir.js/" />
            &nbsp;
            <SocialIcon url="https://www.youtube.com/channel/UCsapn4SRo4YcsmwbcBK0z6w" />
            &nbsp;
            <SocialIcon url="https://www.facebook.com/i.am.prabirb/" />
          </div>
          <hr className="clearfix w-100 d-md-none pb-0" />
        </div>
        <div className="row fbar">
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="col-md-12 mb-md-0 mb-3 text-center ">
            <h4 className="text-uppercase">Links</h4>
            <a href="/">Home</a>
            <a href="#doctors">Doctors</a>
            <a href="#Specialities">Specialities</a>
            <a href="#about-us">About us</a>
            <a href="/BookAppointment">Book Appointment</a>
          </div>
        </div>
        <div className="row fbar">
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="col-md-12 mb-md-0 mb-3 text-center ">
            {/* <h4 className="text-uppercase">Developed By</h4> */}
            <h5>Developed by Prabir Biswas</h5>
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://www.instagram.com/__prabir__/"
            />
            &nbsp;
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://www.linkedin.com/in/prabir-biswas-32a273120/"
            />
            &nbsp;
            {/* <SocialIcon url="https://www.instagram.com/prabir.js/" />
            &nbsp; */}
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://www.facebook.com/i.am.prabirb/"
            />
            &nbsp;
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://www.prabirbiswas.netlify.app/"
            />
          </div>
        </div>
      </div>
      <br />
    </footer>
  );
};
export default Footer;
