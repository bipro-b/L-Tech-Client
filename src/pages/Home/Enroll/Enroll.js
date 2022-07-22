import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/Navbar/NavBar";

import "./Enroll.css";

const Take = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const { bookId } = useParams();
  const [details, setDetails] = useState([]);
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const choosedBook = details.find((serv) => serv.id === bookId);
    setBookDetails(choosedBook);
  }, [details, bookId]);

  const onSubmit = (data) => {
    axios
      .post("https://fierce-escarpment-93712.herokuapp.com/enroll", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added successfully");
          reset();
        }
      });
  };
  return (
    <>
      <NavBar />
      <h1>{details.length}</h1>
      <h2>{bookDetails?.length}</h2>
      <Grid sx={{ alignItems: "center", marginBottom: "20px" }}>
        <Typography>
          <img style={{ borderRadius: "50%" }} src={user.photoURL} alt="" />
          <h2 style={{ color: "black" }}>Hey "{user?.displayName}" Welcome</h2>
        </Typography>
        <Typography sx={{ mx: "auto" }}>
          <img style={{ width: "50%" }} src={bookDetails?.img} alt="" />
        </Typography>
        <Typography
          style={{
            margin: "0 50px 0 50px",
            alignItems: "center",
            color: "black",
            fontSize: "20px",
          }}
        >
          {bookDetails?.description} <br />
        </Typography>
      </Grid>

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
      <Footer />
    </>
  );
};

export default Take;
