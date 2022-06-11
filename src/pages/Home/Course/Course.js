import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Course.css";
import Rating from "react-rating";

const Course = ({ course }) => {
  const { name, img, price, star, category } = course;
  return (
    <Row className="course my-2" xs={1} md={2} lg={2} spacing={1}>
      <Col className="img-container ">
        <img
          className="draw"
          src={img}
          style={{ width: "300px", height: "200px" }}
          alt=""
        />
      </Col>
      <Col
        className="course-name "
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "start",
        //   justifyContent: "start",
        // }}
      >
        <div>
          <style type="text/css">
            {`
         .btn-flat {
              background-color: purple;
           color: white;
                     }
                     .btn-flat:hover{
                      backrground-color: goldenrod;
                    }

          .btn-xxl {
      padding: 1rem 1 rem;
  font-size: 1nrem;
}
   
`}
          </style>
          <h3>Course: {name}</h3>
          <h3>Categorey: {category}</h3>
          <Rating
            style={{ color: "goldenrod" }}
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          />

          <br />
          <Link to="/about">
            {" "}
            <Button
              className="btn-back"
              variant="flat"
              size="xxl"
              style={{ width: "50%" }}
            >
              Enroll Now
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Course;
