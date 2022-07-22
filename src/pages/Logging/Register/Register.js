import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import NavBar from "../../Shared/Navbar/NavBar";
import reg from "../../../images/reg.PNG";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    //   alert('Submit successfully')
    if (loginData.password !== loginData.password2) {
      alert("Your password did not macth");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <>
      <NavBar />
      <Container style={{ backgroundColor: "#F6F7F9" }}>
        <Row lg={2} md={1}>
          <div>
            <Grid container spacing={2} sx={{ marginTop: "50px" }}>
              <Grid item sm={12}>
                <Typography
                  variant="body1"
                  sx={{ color: "black bold", fontSize: "27px" }}
                  gutterBottom
                >
                  Register Here
                  {!isLoading && (
                    <form onSubmit={handleLoginSubmit}>
                      <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="Your First Name"
                        name="name"
                        onBlur={handleBlur}
                        type="name"
                        placeholder='your first name like "Bipro" '
                        variant="standard"
                      />
                      <TextField
                        sx={{ width: "75%", m: 1, color: "white" }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onBlur={handleBlur}
                        type="email"
                        variant="standard"
                      />
                      <TextField
                        sx={{ width: "75%", m: 1, color: "white" }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleBlur}
                        variant="standard"
                      />
                      <TextField
                        sx={{ width: "75%", m: 1, color: "white" }}
                        id="standard-basic"
                        label="Retype your Password"
                        type="password"
                        name="password2"
                        onBlur={handleBlur}
                        variant="standard"
                      />
                      <Button
                        sx={{ width: "75%", m: 1, color: "white" }}
                        type="submit"
                        variant="contained"
                      >
                        Register
                      </Button>
                      <NavLink style={{ textDecoration: "none" }} to="/login">
                        <Button variant="text">
                          Already Register User? Please Login.
                        </Button>
                      </NavLink>
                    </form>
                  )}
                  {isLoading && <CircularProgress />}
                </Typography>
                {user?.email && (
                  <Alert severity="success">RegistrationSuccessfully!!</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
              </Grid>
            </Grid>
          </div>
          <div className="mt-2">
            <img
              style={{ width: "90%", margintop: "10px", borderRadius: "10px" }}
              src={reg}
              alt=""
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Register;
