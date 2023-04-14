import React, { useEffect, useState } from "react";
import "./AllEnroll.css";
const AllEnroll = () => {
  const [applies, setApplies] = useState([]);
  useEffect(() => {
    fetch("https://l-tech-server.onrender.com/enroll")
      .then((res) => res.json())
      .then((data) => setApplies(data));
  }, []);

  return (
    <>
      <div className="apply">
        <h3
          style={{
            color: "white",
            backgroundColor: "#207398",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          All Enrollment
        </h3>
        <div className="title">
          <div>Name</div>
          <div>Enrolled Course</div>
          <div>Course Price($)</div>

          <div>status</div>
        </div>

        {applies.map((order) => (
          <div key={order._id}>
            <div className="allenr my-2">
              <div>{order.displayName}</div>
              <div>{order.name}</div>
              <div>{order.price}</div>
              <div>Progressing</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllEnroll;
