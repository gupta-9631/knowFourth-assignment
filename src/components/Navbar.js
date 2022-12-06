import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = (props) => {
  return (
    <div className="nav_container">
      <div className="left">
        <h2>Brand Name</h2>
      </div>
      <div className="right">
        {props.user ? (
          <button onClick={() => signOut(auth)}>Logout</button>
        ) : (
          <p>
            <Link to="/login">Login</Link>
          </p>
        )}
        <p>{props.user}</p>
      </div>
    </div>
  );
};

export default Navbar;
