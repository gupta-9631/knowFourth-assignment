import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="container">
      <div className="register_container">
        <h2>Register</h2>
        <form className="form_container">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </form>
        <p>Have an account Login</p>
      </div>
    </div>
  );
};

export default Register;
