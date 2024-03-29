import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Review.css";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://l-tech-server.onrender.com/review", data).then((res) => {
      if (res.data.insertedId) {
        alert("Your review submit successfully");
        reset();
      }
    });
  };
  return (
    <>
      <h3
        style={{
          color: "#CAD5E2",
          backgroundColor: "#207398",
          padding: "20px",
          borderRadius: "0 50px 0 50px",
        }}
      >
        Give a Review About our L-tech{" "}
      </h3>
      <div className="add-car">
        {/* <h3 style={{ color: "red" }}>Give a Review About our L-tech </h3> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Your Name"
          />

          <textarea {...register("comment")} placeholder="Write your comment" />
          <input
            type="number"
            {...register("rating")}
            placeholder="rating us 0-5"
          />

          <input style={{ backgroundColor: "goldenrod" }} type="submit" />
        </form>
      </div>
    </>
  );
};

export default Review;
