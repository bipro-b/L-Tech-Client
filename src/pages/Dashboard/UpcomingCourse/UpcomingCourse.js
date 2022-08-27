import { Container } from "@mui/system";
import { Row } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

import React, { useEffect, useState } from "react";
import "./UpcomingCourse.css";
const UpcomingCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://ltech-server.herokuapp.com/assigncourse")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <Container>
        <Row sm={1} md={2} lg={3} className="  g-2">
          {courses.map((ab) => (
            <div className="details">
              <div className="image">
                <img
                  src={ab.img}
                  style={{ height: "250px", width: "75%" }}
                  alt=""
                />
              </div>
              <div className="textual">
                <h4 style={{ textAlign: "center" }}>{ab.name} </h4>
                <CopyToClipboard text={ab.name} onCopy={() => alert("Copied")}>
                  <h4>CourseNameLink</h4>
                </CopyToClipboard>
                <CopyToClipboard
                  text={ab.description}
                  onCopy={() => alert("Copied")}
                >
                  <h4>DescriptionLink</h4>
                </CopyToClipboard>
                <CopyToClipboard text={ab.img} onCopy={() => alert("Copied")}>
                  <h4>ImageUrlLink</h4>
                </CopyToClipboard>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default UpcomingCourse;
