import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";

const ServiceDetails = () => {
  const [services] = useServices();
  const { service_id } = useParams();

  const matchedService = services?.find((service) => service.id == service_id);
  console.log(matchedService);
  return (
    <div>
      <h2>{matchedService?.description}</h2>
    </div>
  );
};

export default ServiceDetails;
