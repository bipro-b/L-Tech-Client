import emailjs from "emailjs-com";
import React from "react";

import NavBar from "../Shared/Navbar/NavBar";
import Footer from "../Shared/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  function sendEmail(e) {
    alert("submit succesfully");
    e.preventDefault();

    emailjs
      .sendForm("gmail", "service_ws9sbnn", e.target, "y1Khv2YGEDTBcEv14")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <NavBar />

      <div className="container contact">
        <div
          className="mx-auto p-1 mt-2"
          style={{ color: "white", fontSize: "30px" }}
        >
          Contact with Us
        </div>
        <form onSubmit={sendEmail}>
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
    </div>
  );
};

export default Contact;
