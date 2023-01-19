import { CircularProgress } from "@mui/material";
import { Container, Row } from "react-bootstrap";
import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import "./Courses.css";
import Course from "../Course/Course";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetch("https://ltechebackened.vercel.app/courses")
      // fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
        setDisplay(data);
      });
  });
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedName = courses.filter((product) =>
      product?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplay(matchedName);
  };
  return (
    <div>
      <h1 className="headline">Choose your course</h1>

      <div className="search-container">
        <input
          type="search"
          onChange={handleSearch}
          className="input"
          placeholder="Seacr by course name"
        />
      </div>

      <Container>
        {isLoading && <CircularProgress />}
        <Row sm={1} md={2} lg={3}>
          {display && courses.length > 0 ? (
            display.map((course) => <Course course={course}></Course>)
          ) : (
            <h1>No results found!!</h1>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
