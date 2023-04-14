import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

import StripeCheckout from "react-stripe-checkout";

import "./MyEnroll.css";
const MyEnroll = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://l-tech-server.onrender.com/enroll?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  // payment
  // const [product, setProduct] = useState({
  //   name: " React from Bipro",
  //   price: 10,
  //   productBy: "Bipro",
  // });
  const [product, setProduct] = useState({
    name: " React from Bipro",
    price: 10,
    productBy: "Bipro",
  });
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:7000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  // delete enrollment
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete?");
    if (proceed) {
      const url = `https://ltechebackened.vercel.app/enroll/${id}`;
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
          <div>Pay Now</div>
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
              <div>
                <StripeCheckout
                  stripeKey="pk_test_51JvzyGFPY5JuFclZn4nZQlalN6TcHrEmbA8QBtfzNX3iNawhYT9u7VJKxDLi2B9fEvaSFJJbqCBZTyd6vTsuOUUs00tovvPmVL" // token={makePayment}
                  token={makePayment}
                  name="PAY FOR L_TECH"
                  amount={order.price * 100}
                >
                  <Button variant="contained">Pay with {order.price} $</Button>
                </StripeCheckout>
              </div>
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
