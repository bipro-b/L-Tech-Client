import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const AddAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://ltech-server.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h3
        style={{
          color: "#CAD5E2",
          backgroundColor: "#207398",
          padding: "20px",
          borderRadius: "0 50px 0 50px",
        }}
      >
        Add Admin
      </h3>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id="standard-basic"
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
        {success && <Alert severity="success">Admin added successfully</Alert>}
      </form>
    </div>
  );
};

export default AddAdmin;
