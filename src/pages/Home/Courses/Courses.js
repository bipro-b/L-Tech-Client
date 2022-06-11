import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Course from "../Course/Course";
import "./Courses.css";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [currentItems, setCurrentItems] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const itemsPerPage = 1;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(courses.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(courses.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, courses]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % courses.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="headline">
        <h3>Enroll a course hurry up!!</h3>
      </div>
      <div>
        {courses.map((course) => (
          <Course course={course} key={course.id} />
        ))}
        {/* <Items currentItems={currentItems} /> */}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  );
};

export default Courses;
