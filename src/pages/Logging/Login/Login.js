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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import NavBar from "../../Shared/Navbar/NavBar";
import reg from "../../../images/reg.PNG";
import { Row } from "react-bootstrap";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInUsingGoogle, isLoading, authError } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      navigate(redirect_url);
    });
  };
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    // alert("Log in successfully");
    loginUser(loginData.email, loginData.password, location, navigate);

    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <Container className="mt-5" style={{ backgroundColor: "#F6F7F9" }}>
        <Row lg={2} md={1}>
          <div>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "50px", margin: "auto" }}
            >
              <Grid
                item
                sm={12}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.625)" }}
              >
                <Typography
                  sx={{ color: "black" }}
                  variant="body1"
                  gutterBottom
                >
                  Log in with email
                  <form onSubmit={handleLoginSubmit}>
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      id="standard-basic"
                      label="Your Email"
                      name="email"
                      onBlur={handleOnchange}
                      type="email"
                      variant="standard"
                    />
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      id="standard-basic"
                      label="Your Password"
                      type="password"
                      name="password"
                      onBlur={handleOnchange}
                      variant="standard"
                    />
                    <Button
                      sx={{ width: "75%", m: 1 }}
                      type="submit"
                      variant="contained"
                    >
                      Login
                    </Button>
                    <NavLink style={{ textDecoration: "none" }} to="/register">
                      <Button variant="text">
                        Are you New User? Please Register
                      </Button>
                    </NavLink>
                  </form>
                </Typography>
                {isLoading && <CircularProgress />}
                {user?.email && (
                  <Alert severity="success">Login Successfully!!</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
              </Grid>
            </Grid>
            <h1>........Or........</h1>
            <h1>Log in with</h1>
            <div className="mx-auto">
              <button
                onClick={handleGoogleLogin}
                // className="btn btn-success btn-outer-primary"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "green",
                }}
              >
                <img
                  style={{ width: "100px", height: "100px" }}
                  src="https://img.icons8.com/color/96/000000/google-logo.png"
                  alt=""
                />
              </button>
            </div>
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

export default Login;
