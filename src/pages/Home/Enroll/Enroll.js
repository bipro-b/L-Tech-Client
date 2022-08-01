import { Grid, Typography, Container } from "@mui/material";
import axios from "axios";
import { Row } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/Navbar/NavBar";

import "./Enroll.css";

const Enroll = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const { bookId } = useParams();
  const [details, setDetails] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const choosedBook = details.find((serv) => serv._id === bookId);
    setBookDetails(choosedBook);
  }, [details, bookId]);

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/enroll", data).then((res) => {
      if (res.data.insertedId) {
        alert("Submit successfully");
        reset();
      }
    });
  };
  return (
    <>
      <NavBar />

      <Container>
        <Grid sx={{ alignItems: "center", marginBottom: "20px" }}>
          <Typography>
            <img style={{ borderRadius: "50%" }} src={user.photoURL} alt="" />
            <div style={{ color: "black" }} className="welcome">
              <p id="animateText">
                Hey "
                <span style={{ color: "goldenrod" }}>{user?.displayName}</span>"
                Welcome.
              </p>
            </div>
          </Typography>
        </Grid>
        <Row lg={2} md={1}>
          <div>
            <Grid
              className="course-details"
              sx={{ alignItems: "center", marginBottom: "20px" }}
            >
              <Typography
                className="thumb"
                sx={{ mx: "auto", marginBottom: "20px" }}
              >
                <img style={{ width: "50%" }} src={bookDetails?.img} alt="" />
              </Typography>
              <Typography
                style={{
                  margin: "0 50px 0 50px",
                  alignItems: "center",
                  textAlign: "left",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                Detals: {bookDetails?.description} <br />
              </Typography>
            </Grid>
          </div>

          <div className="take">
            <h3 style={{ color: "black" }}>Fill the purchase form</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="point">
              <input
                defaultValue={bookDetails?.name}
                {...register("name", { required: true })}
              />
              <input
                defaultValue={bookDetails?.price}
                {...register("description", { required: true })}
              />
              <input
                defaultValue={user?.displayName}
                {...register("displayName", { required: true, maxLength: 20 })}
              />
              <input
                defaultValue={user?.email}
                {...register("email", { required: true, maxLength: 50 })}
              />

              <input
                type="address"
                {...register("address")}
                placeholder="address"
              />
              <input type="address" {...register("city")} placeholder="city" />
              <input
                type="number"
                {...register("phone")}
                placeholder="your phone number"
              />
              <input type="submit" />
            </form>
          </div>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Enroll;
