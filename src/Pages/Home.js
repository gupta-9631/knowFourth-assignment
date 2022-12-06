import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import Products from "../components/Products";

const home = (props) => {
  return (
    <div className="home_container">
      <Navbar user={props.name} />
      <Products />
    </div>
  );
};

export default home;
