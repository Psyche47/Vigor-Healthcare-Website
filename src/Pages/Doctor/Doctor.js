import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

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
          <Card.Text>
            <MdEmail size="1.5em" className="me-2" />
            {contact}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <FaBriefcaseMedical size="1.5em" className="me-2" />
            {qualification1}
          </ListGroupItem>
          <ListGroupItem>
            <FaBriefcaseMedical size="1.5em" className="me-2" />
            {qualification2}
          </ListGroupItem>
          <ListGroupItem>
            <GrUserExpert size="1.5em" className="me-2" />
            Expertise: {speciality}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Doctor;
