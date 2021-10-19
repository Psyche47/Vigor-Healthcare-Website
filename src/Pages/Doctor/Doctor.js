import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
//import { SiNamebase } from "react-icons/si";

const Doctor = ({ doctor }) => {
  const { name, qualification1, qualification2, speciality, contact, img } =
    doctor;
  const cardImg = {
    height: "300px",
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
          <Card.Title>{name}</Card.Title>
          <Card.Text>{contact}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{qualification1}</ListGroupItem>
          <ListGroupItem>{qualification2}</ListGroupItem>
          <ListGroupItem>Expertise: {speciality}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Doctor;
