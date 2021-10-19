import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Doctor from "./../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Container>
        <h5 className="display-5 rounded text-center text-light bg-dark p-3 mt-3">
          Our Most Experienced Doctors
        </h5>
        <div className="d-flex justify-content-between">
          <div className="row">
            {doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor}></Doctor>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Doctors;
