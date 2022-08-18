import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ltech from "../../../images/ltech.png";
import "./InstractorHeader.css";
const InstructorHeader = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.312)",
  };

  return (
    <div className="header ">
      <Navbar
        bg="dark"
        style={{ color: "rgba(0, 0, 0, 0.312)" }}
        variant={"dark"}
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="home">
            <span>
              {" "}
              <img src={ltech} style={{ width: "70px" }} alt="" />
            </span>
            -Tech
          </Navbar.Brand>
          <div style={{ color: "white", fontSize: "23px" }}>
            Intructors Pannel
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" mx-auto  my-lg-0 me-0 "
              style={{ maxHeight: "375px" }}
              navbarScroll
            >
              <NavLink to="/" activeStyle={activeStyle}>
                Home
              </NavLink>
              <NavLink to="/teacher" activeStyle={activeStyle}>
                Teachers
              </NavLink>
              <NavLink to="/contact" activeStyle={activeStyle}>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default InstructorHeader;
