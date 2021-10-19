import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import DoctorBanner from "./../../Images/Banner/Doctor-View.jpg";
import Service from "./../../Images/Banner/Services.jpg";
import About from "./../../Images/Banner/About-Us.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item className="carousel-banner">
          <img className="d-block w-100" src={DoctorBanner} alt="First slide" />
          <Carousel.Caption>
            <h3 className="display-3">Vigor General Hospital</h3>
            <h5 className="display-4 text-">At Vigor We Care</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner">
          <img className="d-block w-100" src={Service} alt="Second slide" />

          <Carousel.Caption>
            <h3>We Offer A Plethora Of Services</h3>
            <Link to="/services">
              <Button variant="info">View All Our Services</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-banner">
          <img
            className="d-block w-100 carousel-img"
            src={About}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>We're operating since 1996</h3>
            <Link to="/about">
              <Button variant="info">Know About Us</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
