import { Container } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/Navbar/NavBar";
import banner2 from "../../../images/banner2.jpg";
import banner30 from "../../../images/banner30.jpg";
import user1 from "../../../images/user-1.png";
import user2 from "../../../images/user-2.png";

// import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-3">
        <Row md={1} lg={2} sm={1}>
          <Col className="mx-auto my-auto my-5 " style={{ textAlign: "left" }}>
            <h1>
              This is ,<span style={{ color: "goldenrod" }}>Lizz Trass</span>{" "}
              <br />
              who is the founder of{" "}
              <span style={{ color: "goldenrod" }}>L-Tech</span>
              Learn how to compete in the modern world by enrolling in one of
              the L-Tech courses. Enroll in our data science, Internet of
              Things, machine learning, artificial intelligence, deep learning,
              and other courses to get ready. You'll learn how to create
              anything, including games, websites, and apps. Select a course
              from a selection that will appeal too.
            </h1>
            <h4 className="mt-2" style={{ color: "red" }}>
              Contact Info
            </h4>
            <p> Email:b@yahoo.com</p>
            <p>Hotline: 606098734</p>
            <p> Phone number: 8989-7878-9090</p>
            <div className=" w-25 d-flex justify-content-center mx-auto justify-content-evenly">
              <a
                href="https://github.com/bipro-b"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-browser"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bipro-barai-419381179/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UChekLTEIdsGpPY3JnC38Udw/featured"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100062495514493"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </div>
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
        <hr />
        <Row className="d-flex flex-wrap justifyContent-center-between alignItems-center  ">
          <div
            className="  col-md-6 col-lg-4 col-sm-12 card d-flex justify-content-center align-items-center"
            style={{ width: "322px" }}
          >
            <div>
              <img
                style={{
                  width: "149px",
                  marginTop: "40px",
                  borderRadius: "50%",
                }}
                class="img-fluid"
                src={user2}
                alt="..."
              />
              <div className=" card-body">
                <p id="clients-say" class=" container card-text">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
              </div>

              <p id="name">Colings Mils</p>

              <p id="occupation">MD</p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-sm-12  card d-flex justify-content-center align-items-center"
            style={{ width: "322px" }}
          >
            <div>
              <img
                style={{
                  width: "149px",
                  marginTop: "40px",
                  borderRadius: "50%",
                }}
                class="img-fluid"
                src={banner30}
                alt="..."
              />
              <div class=" card-body">
                <p id="clients-say" class=" container card-text">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
              </div>

              <p id="name">Bipro Barai</p>

              <p id="occupation">CEO</p>
            </div>
          </div>
          <div
            className=" col-md-6 col-lg-4 col-sm-12  card d-flex justify-content-center align-items-center"
            style={{ width: "322px" }}
          >
            <div>
              <img
                style={{
                  width: "149px",
                  marginTop: "40px",
                  borderRadius: "50%",
                }}
                class="img-fluid"
                src={user1}
                alt="..."
              />
              <div class=" card-body">
                <p id="clients-say" class=" container card-text">
                  Slate helps you see how many more days you need to work to
                  reach your financial goal for the month and year.
                </p>
              </div>

              <p id="name">Regina Mils</p>

              <p id="occupation">Manager</p>
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;
