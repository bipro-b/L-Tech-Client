import React from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import "./Faq.css";
import faq from "../../../images/faq.jpg";
const Faq = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-3">
        Frequently <span style={{ color: "goldenrod" }}>Ask and Answer</span>
      </h2>
      <Row xs={1} md={1} lg={2}>
        <Accordion className="text">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who is For this course?</Accordion.Header>
            <Accordion.Body className="accord">
              Any one can enroll for any courses. It one is more enthusiast.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is prerequisite for these courses?
            </Accordion.Header>
            <Accordion.Body className="accord">
              The prerequisite for this course will be having a laptop or a
              desktop html/python/javascript etc editor active internet
              connection.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How to get your certificate</Accordion.Header>
            <Accordion.Body className="accord">
              The only way to get the certificate of a course is to complete the
              course as early as possible.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Will you be skillful?</Accordion.Header>
            <Accordion.Body className="accord">
              Yes, our courses are embedded with projects at the end which are
              very useful and it will give you real world experience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How much time you have to give for this course?
            </Accordion.Header>
            <Accordion.Body className="accord">
              The courses we are offering have lifetime access. If you are
              enrolled in any of the courses you can complete the course any
              time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Have any money back system?</Accordion.Header>
            <Accordion.Body className="accord">
              Yes, we have . User can cancel any course if they have any problem
              and they will be refunded within 48 hours.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Free courses are available?</Accordion.Header>
            <Accordion.Body className="accord">
              Yes, we have some useful and interesting free courses for our
              users. But they will not get the privilege of paid courses like
              lifetime enrollment, certificate etc.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div>
          <img src={faq} style={{ width: "100%" }} alt="" />
        </div>
      </Row>
    </Container>
  );
};

export default Faq;
