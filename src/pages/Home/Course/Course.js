import { Button, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./Course.css";

const Course = (props) => {
  const { name, img, price, _id, star } = props.course;
  return (
    <Container className="course-container">
      <div
        className="course"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "ceter",
          alignItems: "center",
        }}
      >
        <div className="img-container">
          <div className="photo">
            <img src={img} style={{ width: "300px", height: "200px" }} alt="" />
          </div>

          <h3 className="photo-detail" style={{ textAlign: "center" }}>
            {name}
          </h3>
        </div>
        <div>
          <h3>Course:{name}</h3>
          <h3>Price: ${price}</h3>
          Rating:
          <Rating
            style={{ color: "goldenrod" }}
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          />
          <br />
          <Link to={`/${_id}`}>
            <Button className="btn-back ">Enroll Now</Button>{" "}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Course;
