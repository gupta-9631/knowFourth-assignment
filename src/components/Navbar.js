import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="left">
        <h2>Brand Name</h2>
      </div>
      <div className="right">
        <p>Register</p>
        <p>Login</p>
        <p>User</p>
      </div>
    </div>
  );
};

export default Navbar;
