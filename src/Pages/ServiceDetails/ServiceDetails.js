import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";
import { BsCardHeading } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";

const ServiceDetails = () => {
  const [services] = useServices();
  const { service_id } = useParams();

  const matchedService = services?.find((service) => service.id == service_id);
  console.log(matchedService);
  return (
    <div>
      <Container className="my-2">
        <Row className="d-flex">
          <Col lg={8} md={12} sm={12}>
            <img width="100%" src={matchedService?.img} alt="" />
          </Col>
          <Col lg={4}>
            <h2>
              <BsCardHeading className="me-2" />
              {matchedService?.service_name}
            </h2>
            <h4>
              <MdOutlineDescription size="1.5em" />
              {matchedService?.description}
            </h4>
            <h5>
              <AiOutlineOrderedList size="1.5em" className="me-2" />
              Additional Details:
            </h5>
            <h5>1. {matchedService?.additional1}</h5>
            <h5>2. {matchedService?.additional2}</h5>
            <h5>3. {matchedService?.additional3}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
