import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./AllEnroll.css";
const AllEnroll = () => {
  const { user } = useAuth();
  const [applies, setApplies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/enroll")
      .then((res) => res.json())
      .then((data) => setApplies(data));
  }, []);

  return (
    <>
      <div className="apply">
        <h3 style={{ color: "white" }}>All Enrollment</h3>
        <div className="title">
          <div>Name</div>
          <div>Enrolled Course</div>
          <div>Course Code</div>

          <div>status</div>
        </div>

        {applies.map((order) => (
          <div key={order._id}>
            <div className="allenr my-2">
              <div>{order.displayName}</div>
              <div>{order.name}</div>
              <div>{order.description}</div>
              <div>Progressing</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllEnroll;
