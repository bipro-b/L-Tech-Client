import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import "./Assigned.css";
const Assigned = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/assigncourse")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <Container className="mt-5">
        <Row sm={1} md={2} lg={3} className="  g-1">
          {courses.map((ab) => (
            <Container className=" ">
              <div className="photo-frame">
                <div className="photo">
                  <img
                    src={ab.img}
                    style={{ height: "250px", width: "140px" }}
                    alt=""
                  />
                </div>
                <div className=" photo-detail">
                  <h2 id="program">Course: {ab.name} </h2>
                  {ab.description}
                </div>
              </div>
            </Container>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Assigned;
