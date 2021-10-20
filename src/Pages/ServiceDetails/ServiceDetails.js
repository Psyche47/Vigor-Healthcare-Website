import { Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";
import { BsCardHeading } from "react-icons/bs";
import { MdDescription, MdOutlineDescription } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const [services] = useServices();
  const { service_id } = useParams();

  const matchedService = services?.find((service) => service.id == service_id);
  console.log(matchedService);
  return (
    <div>
      <Container className="my-2">
        <Row className="d-flex justify-content-center">
          <Col lg={8} md={12} sm={12}>
            <img width="100%" src={matchedService?.img} alt="" />
          </Col>
          <Col lg={4} className="border border-dark rounded">
            <h2>
              <BsCardHeading className="me-2" />
              <u>{matchedService?.service_name}</u>
            </h2>
            <h4>
              <MdOutlineDescription size="1.5em" />
              {matchedService?.description}
            </h4>
            <h5>
              <AiOutlineOrderedList size="1.5em" className="me-2" />
              <u>Additional Details:</u>
            </h5>
            <h5>1. {matchedService?.additional1}</h5>
            <h5>2. {matchedService?.additional2}</h5>
            <h5>3. {matchedService?.additional3}</h5>
            <Link to="/services" className="text-center">
              <Button
                variant="dark"
                className="text-light
        "
              >
                <MdDescription /> View Other Services
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
