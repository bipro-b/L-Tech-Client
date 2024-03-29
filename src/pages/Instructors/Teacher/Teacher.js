import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import InstructorHeader from "../InstractorHeader/InstructorHeader";
import Footer from "../../Shared/Footer/Footer";
import "./Teacher.css";
const Teacher = () => {
  const [teachers, setTeacher] = useState([]);
  useEffect(() => {
    fetch("./teacher.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);
  return (
    <div>
      <InstructorHeader />
      <Container>
        <h3
          style={{
            color: "#CAD5E2",
            backgroundColor: "#207398",
            padding: "10px",
            borderRadius: "0 0 5px 5px",
          }}
        >
          Our Instructors
        </h3>
        <div className="title">
          <div>Image</div>
          <div>Name</div>
          <div>Position</div>
          <div>Location</div>
        </div>
        {teachers.map((teacher) => (
          <div key={teacher.id}>
            <div className="tech mb-2">
              <div style={{ textAlign: "left", marginLeft: "10px" }}>
                <img
                  src={teacher.pic}
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  alt=""
                />{" "}
              </div>
              <div>{teacher.name}</div>
              <div>{teacher.position}</div>
              <div>{teacher.Location}</div>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Teacher;
