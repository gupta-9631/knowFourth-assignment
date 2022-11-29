import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login_container">
        <h2 className="login">Login</h2>
        <form className="form_container">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </form>
        <p>Don't have an account Register</p>
      </div>
    </div>
  );
};

export default Login;
