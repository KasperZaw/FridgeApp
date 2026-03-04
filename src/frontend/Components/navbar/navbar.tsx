import React from "react";
import Scanner from "../scaner/scanner";
import { LogoutUser } from "../../../backend/Firebase/auth.services";
import { useNavigate } from "react-router-dom";
const navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button
        style={{
          background: "linear-gradient(90deg, #3b82f6, #a855f7)",
          height: "50px",
          width: "80px",
          border: "none",
          borderRadius: "15px",
          fontSize: "medium",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          color: "white",
        }}
        onClick={() => {
          LogoutUser();
          navigate("/login");
        }}
      >
        logout
      </button>
      <Scanner />
    </nav>
  );
};

export default navbar;
