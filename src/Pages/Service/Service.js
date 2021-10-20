import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDescription, MdHealthAndSafety } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

const Service = ({ service }) => {
  const { id, service_name, description, additional1, img } = service;
  const cardImg = {
    height: "200px",
    width: "286px",
  };
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <Card style={{ width: "18rem" }} className="mt-3 g-2 mx-auto">
        <Card.Img
          variant="top"
          src={img}
          style={cardImg}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>{service_name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {" "}
            <MdHealthAndSafety className="me-1" size="1.5em" />
            <strong>
              <u>We Offer</u>
            </strong>
            : {additional1.slice(0, 80)}
          </ListGroupItem>
          <ListGroupItem>
            <BiMessageSquareDetail className="me-1" size="1.5em" />
            <strong>
              <u>Details</u>
            </strong>
            : {description.slice(0, 160)}{" "}
          </ListGroupItem>
          <ListGroupItem>
            <div className="d-flex justify-content-center">
              <Link to={`/details/${id}`}>
                <Button variant="dark" className="text-light">
                  <MdDescription /> View Full Details
                </Button>
              </Link>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Service;
