import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <ListGroupItem>We Offer: {additional1.slice(0, 90)}</ListGroupItem>
          <ListGroupItem>
            Description: {description.slice(0, 150)}{" "}
          </ListGroupItem>
          <ListGroupItem>
            <div className="d-flex justify-content-center">
              <Link to={`/details/${id}`}>
                <Button variant="primary">View Full Details</Button>
              </Link>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Service;
