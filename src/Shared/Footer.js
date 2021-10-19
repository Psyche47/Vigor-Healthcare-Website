import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SiFacebook, SiTwitter, SiYoutube } from "react-icons/si";
import { NavLink } from "react-router-dom";
import logo from "./../Images/logo.png";
import "./Footer.css";

const Footer = () => {
  const activeStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "large",
    marginLeft: "5px",
  };
  return (
    <footer>
      <div className="bg-dark">
        <Container>
          <Row className="bg-dark text-white p-3 mt-2">
            <Col className="d-flex align-items-center">
              <img src={logo} alt="" className="flag-img" />
              <NavLink to="/home" style={activeStyle}>
                Vigor General Hospital
              </NavLink>
            </Col>
            <Col className="ms-4">
              <h5 className="link-heading">Useful Links</h5>
              <div className="link-container">
                <NavLink to="/services" className="active">
                  All Our Services
                </NavLink>
                <NavLink to="/faq" className="active">
                  Frequently Asked Questions
                </NavLink>
                <NavLink to="/about" className="active">
                  About Us
                </NavLink>
              </div>
            </Col>
            <Col>
              <h5 className="link-heading">Contact Us</h5>
              <div className="d-flex flex-column">
                <div>
                  <SiFacebook size={30}></SiFacebook>
                  <a
                    href="https://www.facebook.com/learn.german.language/"
                    target="_blank"
                    rel="noreferrer"
                    className="active-social"
                  >
                    Facebook
                  </a>
                </div>
                <div className="mt-2">
                  <SiYoutube size={30}></SiYoutube>
                  <a
                    href="https://www.youtube.com/yourgermanteacher"
                    target="_blank"
                    rel="noreferrer"
                    className="active-social"
                  >
                    Youtube
                  </a>
                </div>
                <div className="mt-2">
                  <SiTwitter size={30}></SiTwitter>
                  <a
                    href="https://twitter.com/learngerman"
                    target="_blank"
                    rel="noreferrer"
                    className="active-social"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <h5 className="link-heading">Subscribe to our Newsletter</h5>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button type="button" class="btn btn-secondary">
                  Subscribe
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
