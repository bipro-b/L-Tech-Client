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
      <h3>Assigned Courses</h3>
      <Assigned />
      <Footer />
    </div>
  );
};

export default Instructor;
