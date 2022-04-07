import React from "react";
import logo from "../image/react-logo.png";
import "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo" />
        <h2>ReactFacts</h2>
      </div>
      <div>
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  );
};

export default Navbar;
