import React from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { service_id } = useParams();
  return (
    <div>
      <h2>{service_id}</h2>
    </div>
  );
};

export default ServiceDetails;
