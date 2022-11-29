import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import Products from "../components/Products";

const home = () => {
  return (
    <div className="home_container">
      <Navbar />
      <Products />
    </div>
  );
};

export default home;
