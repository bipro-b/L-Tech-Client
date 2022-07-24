import React, { useState } from "react";
import love from "../../../images/love.gif";
import loved from "../../../images/loved.png";
const Like = () => {
  const [likes, setLikes] = useState(245);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="mx-auto"
      style={{
        width: "200px",
        backgroundColor: "lightsteelblue",
        boxShadow: "7px 5px 7px",
      }}
    >
      <button
        style={{
          backgroundColor: "lightsteelblue",
          width: "100px",
          border: "none",
        }}
        className={`btn-btn-outline ${isClicked && "liked"}`}
        onClick={handleClick}
      >
        {isClicked ? (
          <span>
            <img src={loved} alt="" />
          </span>
        ) : (
          <span>
            <img style={{ width: "60px", height: "50px" }} src={love} alt="" />
          </span>
        )}
      </button>
      <span
        className="likes-counter"
        style={{ color: "blue" }}
      >{`${likes}`}</span>
    </div>
  );
};

export default Like;
