import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Row } from "react-bootstrap";

import NavBar from "../Shared/Navbar/NavBar";
import Footer from "../Shared/Footer/Footer";
import contact from "../../../src/images/contact.png";
import "./Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert("Do You want to submit?");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1j5n1gn",
        "template_1mu73vc",
        form.current,
        "eO5-SRYTpVe2OA5Sx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <NavBar />

      <h3
        style={{
          color: "#CAD5E2",
          backgroundColor: "#207398",
          padding: "10px",
          borderRadius: "0 0 5px 5px",
        }}
      >
        Contact with us
      </h3>
      <div>
        <Row md={1} lg={2}>
          <Col>
            <img src={contact} style={{ width: "100%" }} alt="" />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <div>
              <p className="addr">Address: CTG-ROUZAN-CUET</p>
              <p className="addr">Hotline: 098-569-566</p>
              <p className="addr"> Phone number: 8989-7878-9090</p>
              <p className="addr">Yahoo: y@yahoo.com</p>
              <p className="addr"> Email:b@gmail.com</p>
            </div>
          </Col>
        </Row>
        <div className="font-icon w-25 d-flex justify-content-center mx-auto justify-content-evenly addr">
          <a href="https://github.com/bipro-b" target="_blank" rel="noreferrer">
            <i class="fab fa-github"></i>
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
      </div>

      <div className="container contact">
        <div
          className="mx-auto p-1 mt-2"
          style={{ color: "white", fontSize: "30px" }}
        >
          Send message
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="row  mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Text your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info mx-auto"
                style={{ width: "75%" }}
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
