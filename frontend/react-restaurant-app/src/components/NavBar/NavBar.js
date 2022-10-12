import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPizzaSlice } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#">
          <FaPizzaSlice /> Vic's Pizza
        </Navbar.Brand>
        <div className="links">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <NavDropdown title="Connect" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  <FaFacebook /> Facebook
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <FaInstagram /> Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <AiFillTwitterCircle /> Twitter
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
