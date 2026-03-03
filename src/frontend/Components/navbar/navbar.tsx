import React from "react";
import Scanner from "../scaner/scanner";
import { LogoutUser } from "../../../backend/Firebase/auth.services";
import { useNavigate } from "react-router-dom";
const navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button
        onClick={() => {
          LogoutUser();
          navigate("/login");
        }}
      >
        logout
      </button>
      <img src="./src/assets/Logo.png" alt="Logo" />
      <Scanner />
    </nav>
  );
};

export default navbar;
