// import { Carousel } from 'bootstrap';
import React from "react";
import banner1 from "../../../images/user-1.png";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/user-2.png";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <style type="text/css">
        {`
         .btn-flat {
              background-color: purple;
           color: white;
                     }

.btn-xxl {
  padding: 1rem 1 rem;
  font-size: 1 rem;
}
`}
      </style>

      <Carousel className="mt-3 mb-5">
        <Carousel.Item interval={2000}>
          <Row md={1} lg={2}>
            <Col
              className="mx-auto my-auto my-5 "
              style={{ textAlign: "left" }}
            >
              <h1>
                Hey,<span style={{ color: "goldenrod" }}>Welcome</span> <br />
                to our <span style={{ color: "goldenrod" }}>L-Tech</span> web
                page Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium inventore perferendis numquam laborum sunt natus odit
                magni quasi, odio corrupti quos alias. Incidunt laborum
                cupiditate provident delectus, quasi dicta officia saepe optio
                blanditiis quam!
              </h1>
              <Link to="/about">
                {" "}
                <Button variant="flat" size="xxl">
                  Learn More
                </Button>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                className="d-block rounded-circle"
                src={banner1}
                style={{ width: "400px", height: "500px" }}
                alt="First slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Row md={1} lg={2}>
            <Col
              className="mx-auto my-auto my-5 "
              style={{ textAlign: "inherit", wordWrap: "break-word" }}
            >
              <h1>
                Hey,<span style={{ color: "goldenrod" }}>Welcome</span> <br />
                to our <span style={{ color: "goldenrod" }}>L-Tech</span> web
                page Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium inventore perferendis numquam laborum sunt natus odit
                magni quasi, odio corrupti quos alias. Incidunt laborum
                cupiditate provident delectus, quasi dicta officia saepe optio
                blanditiis quam!
              </h1>
              <Link to="/about">
                <Button variant="flat" size="xxl">
                  Learn More
                </Button>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                className="d-block rounded-circle"
                src={banner3}
                style={{ width: "400px", height: "500px" }}
                alt="First slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row md={1} lg={2}>
            <Col
              className="mx-auto my-auto my-5 "
              style={{ textAlign: "left" }}
            >
              <h1>
                Hey,<span style={{ color: "goldenrod" }}>Welcome</span> <br />
                to our <span style={{ color: "goldenrod" }}>L-Tech</span> web
                page Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium inventore perferendis numquam laborum sunt natus odit
                magni quasi, odio corrupti quos alias. Incidunt laborum
                cupiditate provident delectus, quasi dicta officia saepe optio
                blanditiis quam!
              </h1>
              <Link to="/about">
                <Button variant="flat" size="xxl">
                  Learn More
                </Button>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              <img
                className="d-block rounded-circle"
                src={banner2}
                style={{ width: "400px", height: "500px" }}
                alt="First slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
