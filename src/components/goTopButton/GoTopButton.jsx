import React from "react";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function GoTopButton() {
  const goToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <button
        style={{
          backgroundColor: "#fff",
          color: "black",
          padding: "20px",
          borderRadius: "30px",
          border: "none",
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
    cursor:"pointer"
        }}
        onClick={goToTopHandler}
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
}
