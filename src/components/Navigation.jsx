import logo from "./images/ShitalCliniclogo.png";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar
      bg="light"
      variant="light"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Navbar.Brand>
        <img src={logo} width="40px" height="40px" alt="logo" />{" "}
        <span style={{ color: "#cd408f" }}>SHITAL CLINIC</span>
      </Navbar.Brand>
      <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav className="m-auto">
          <LinkContainer to="/">
            <Nav.Link href="">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/BookAppointment">
            <Nav.Link>Book Appointment</Nav.Link>
          </LinkContainer>
          {/* {navv} */}
          {/* <LinkContainer to={{ pathname: "/", hash: "#Specialities" }}>
            <Nav.Link href="">Specialities</Nav.Link>
          </LinkContainer>
          <LinkContainer to={{ pathname: "/", hash: "#doctors" }}>
          <Nav.Link href="">Doctors</Nav.Link>
          </LinkContainer>
          <LinkContainer to={{ pathname: "/", hash: "#about-us" }}>
          <Nav.Link href="">About Us</Nav.Link>
          </LinkContainer> */}
          <LinkContainer to="/Gallery">
            <Nav.Link>Our Results</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
