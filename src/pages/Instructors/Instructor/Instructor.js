import React from "react";
import Assigned from "../Assigned/Assigned";
import Footer from "../.../../../Shared/Footer/Footer";
import AssignedCourse from "../AssignedCourse/AssignedCourse";
import InstructorHeader from "../InstractorHeader/InstructorHeader";
const Instructor = () => {
  return (
    <div>
      <InstructorHeader />
      <AssignedCourse />
      <h3
        style={{
          color: "#CAD5E2",
          backgroundColor: "#207398",
          padding: "20px",
          borderRadius: "0 50px 0 50px",
        }}
      >
        Assigned Courses
      </h3>
      <Assigned />
      <Footer />
    </div>
  );
};

export default Instructor;
