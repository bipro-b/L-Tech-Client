import { Container } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./Courses.css";
const Courses = () => {
  const [courses, setCourse] = useState([]);
  // fake data is loading from json
  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div>
      <Container className="pb-4">
        <Row sm={1} md={2} lg={3} className="  g-3">
          {courses.map((course) => (
            <Container className=" ">
              <div className="photo-frame">
                <div className="photo">
                  <img
                    src={course.img}
                    style={{ width: "300px", height: "200px" }}
                    alt=""
                  />
                </div>
                <div className=" photo-detail">
                  <h3>Course:{course.name}</h3>
                  <h3>Category:{course.category}</h3>
                </div>
              </div>
            </Container>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
