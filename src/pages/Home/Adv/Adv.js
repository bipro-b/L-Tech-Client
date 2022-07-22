import React from "react";
import adv from "../../../video/adv.mp4";
import "./Adv.css";
const Adv = () => {
  return (
    <>
      <div className="mx-auto d-flex justify-content-center my-2">
        <h3 style={{ color: "AppWorkspace" }}>
          <p className="animate">
            Hi Do You want to see yourself as{" "}
            <span style={{ color: "goldenrod" }}>
              an emoplyee in 4th industrialrevolution
            </span>
            .So, visit our L-tech.Here you wil visit ML,AI,IOT,Robotiics.So no
            late enroll a course.
          </p>
        </h3>
      </div>

      <div style={{ backgroundColor: "rgb(146, 176, 204,.2)" }}>
        <video
          src={adv}
          width="100%"
          height="300"
          controls="controls"
          autoplay="true"
        />
      </div>
    </>
  );
};

export default Adv;
