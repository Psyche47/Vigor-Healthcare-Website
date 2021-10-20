import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";
import { BsCardHeading } from "react-icons/bs";
import { MdDescription, MdOutlineDescription } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const [services] = useServices();
  const { service_id } = useParams();
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    const matchedService = services?.find(
      (service) => parseInt(service.id) === parseInt(service_id)
    );
    setSingleService(matchedService);
  }, [services]);
  return (
    <div>
      <Container className="my-2">
        <Row className="d-flex justify-content-center">
          <Col lg={8} md={12} sm={12}>
            <img width="100%" src={singleService?.img} alt="" />
          </Col>
          <Col lg={4} className="border border-dark rounded p-3 border-3">
            <h3>
              <BsCardHeading className="me-2" />
              <u>{singleService?.service_name}</u>
            </h3>
            <h5>
              <MdOutlineDescription size="1.5em" />
              {singleService?.description}
            </h5>
            <h5>
              <AiOutlineOrderedList size="1.5em" className="me-2" />
              <u>Additional Details:</u>
            </h5>
            <h5>1. {singleService?.additional1}</h5>
            <h5>2. {singleService?.additional2}</h5>
            <h5>3. {singleService?.additional3}</h5>
            <div className="text-center mt-2">
              <Link to="/services">
                <Button variant="dark" className="text-light">
                  <MdDescription /> View Other Services
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
