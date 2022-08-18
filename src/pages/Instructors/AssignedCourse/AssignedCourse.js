import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import "./AssignedCourse.css";

const AssignedCourse = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/assigncourse", data).then((res) => {
      if (res.data.insertedId) {
        alert("Assigned successfully");
        reset();
      }
    });
  };
  return (
    <>
      <div className="add-car mb-5">
        <h3 style={{ color: "white" }}>Assign a new Course</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Course name"
          />

          <textarea {...register("description")} placeholder="Description" />
          <input {...register("img")} placeholder="upload image" />
          <input style={{ backgroundColor: "goldenrod" }} type="submit" />
        </form>
      </div>
    </>
  );
};

export default AssignedCourse;
