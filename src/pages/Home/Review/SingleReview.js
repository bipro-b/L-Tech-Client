import { Card, CardContent, Grid, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import emoji from "../../../images/emoji.jpg";
const SingleReview = (props) => {
  const { name, comment, rating } = props.review;
  const [value, setValue] = useState(rating);
  const { user } = useAuth();
  console.log(props.review);
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sm={{ minWidth: 300, border: 0, boxShadow: 0 }}>
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h5" component="div">
            <span>
              {" "}
              {user.photoURL ? (
                <span>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={user.photoURL}
                    alt=""
                  />
                </span>
              ) : (
                <span>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={emoji}
                    alt=""
                  />
                </span>
              )}
            </span>
            {name} ,
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {comment}
          </Typography>
          <Typography variant="h5" component="legend">
            <Rating
              name="read-only"
              value={value}
              onChange={(event, rating) => {
                setValue(rating);
              }}
              readOnly
            />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleReview;
