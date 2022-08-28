import React from "react";
import adv from "../../../video/adv.mp4";
import "./Adv.css";
const Adv = () => {
  return (
    <>
      <div className="mx-auto d-flex justify-content-center my-2">
        <h3 style={{ color: "#CAD5E2" }}>
          <p
            style={{
              color: "#CAD5E2",
              backgroundColor: "#207398",
              padding: "15px",

              borderRadius: "0 50px 0px 50px",
            }}
            className="animate"
          >
            Hi Dear, visitors enroll yourself as a learner for{" "}
            <span style={{ color: "goldenrod" }}>getting job</span> in 4 th
            industrial revolution.
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
