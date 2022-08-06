import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import "./AddCourse.css";

const AddCourse = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/courses", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added successfully");
        reset();
      }
    });
  };
  return (
    <>
      <div className="add-car">
        <h3 style={{ color: "white" }}>Add new Course</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Course name"
          />

          <textarea {...register("description")} placeholder="Description" />
          <input
            type="number"
            {...register("price")}
            placeholder="Course Code"
          />
          <input
            type="number"
            {...register("star")}
            placeholder="Static Rating"
          />
          <input {...register("img")} placeholder="upload image" />
          <input style={{ backgroundColor: "goldenrod" }} type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddCourse;
