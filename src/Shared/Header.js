import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Header = () => {
  const activeStyle = {
    color: "white",
    textDecoration: "none",
  };
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="./logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <NavLink to="/home" style={activeStyle}>
              Vigor General Hospital
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={activeStyle} as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link style={activeStyle} as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link style={activeStyle} as={Link} to="/doctors">
              Find A Doctor
            </Nav.Link>
            <Nav.Link style={activeStyle} as={Link} to="/faq">
              FAQ
            </Nav.Link>
            {user?.email ? (
              <Navbar.Text>
                <span style={activeStyle}>
                  Signed in as: {user?.displayName}
                </span>
                <Button variant="light" onClick={logOut} className="ms-3">
                  Sign Out
                </Button>
              </Navbar.Text>
            ) : (
              <Nav.Link style={activeStyle} as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
