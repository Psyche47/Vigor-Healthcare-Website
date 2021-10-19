import React from "react";
import { ListGroup } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="container">
      <h2 className="bg-dark text-white text-center p-2 mt-2 ">
        Frequently asked questions!
      </h2>
      <ListGroup>
        <ListGroup.Item>1. How do I make an Appointment?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: To make appointment for Consultation with our Consultants who sit
          in our Out-patient Departments, please call our hotline 10666 from any
          phone anywhere in the country.
        </ListGroup.Item>
        <ListGroup.Item>
          2. Do you have Consultants available in United Hospital for 24 hours?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: In out-patient department, to provide Consultation services, our
          Consultants are available from 7am till 9pm on weekdays (Saturday to
          Thursday); of course the time varies from Consultant to Consultant.
        </ListGroup.Item>
        <ListGroup.Item>
          3. Do you have any telephone facilities for the patients who are
          admitted in your hospital?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Yes, we have telephone facilities for admitted patients only for
          some specific room categories.
        </ListGroup.Item>
        <ListGroup.Item>
          4. What are the phone numbers of your hospital for one should call
          during Emergency?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Emergency Hotline (from any phone anywhere in the country): 10666
        </ListGroup.Item>
        <ListGroup.Item>
          5. Does the hospital offer any spiritual services?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: For the Male Muslims the prayer room is located at the ground
          floor in the hospital lobby just besides Blood Bank and for the Female
          at 1st floor beside the Ultrasonography wing.
        </ListGroup.Item>
        <ListGroup.Item>
          6. What kind of food services is available in the hospital?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Guest Cafeteria of United Hospital is open 24 hours every day. It
          is located at the ground floor of the hospital. The Cafeteria offers
          hygienic and delicious meal options, including vegetarian choices.
        </ListGroup.Item>
        <ListGroup.Item>
          7. Is there any pharmacy within the hospital premises?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Pharmacy is available at the Ground floor (Lobby) of United
          Hospital which remains open for 24hours a day & 7 days a week.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FAQ;
