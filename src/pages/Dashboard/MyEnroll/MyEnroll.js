import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

import "./MyEnroll.css";
const MyEnroll = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/enroll?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  // delete enrollment
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/enroll/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted succesfully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <>
      <div className="myapp">
        <h3 style={{ color: "black" }}>My Courses</h3>
        <div className="enrtitle">
          <div>CourseName</div>
          <div></div>
          <div>Cancelaion</div>
        </div>
        {orders.map((order) => (
          <div key={order._id}>
            <div className="enr my-2">
              <div style={{ textAlign: "left", marginLeft: "10px" }}>
                {/* <img
                  src={order.name}
                  style={{ width: "30px", borderRadius: "50%" }}
                  alt=""
                />{" "} */}
                {order.name}
              </div>
              <div></div>
              <div>
                <Button onClick={() => handleDelete(order._id)} variant="text">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyEnroll;
