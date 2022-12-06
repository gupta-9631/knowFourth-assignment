import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const navigate = useNavigate();

  // setting input values to the setValues function
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    //checking if input fields have values or not
    // then if there are not values show error
    if (!values.name || !values.email || !values.password) {
      setErr("Fill all fields");
      return;
    }
    setErr("");

    // if user already exists then disabled the button
    setSubmitButtonDisabled(true);
    // createing user with email and password
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // set user name to displayName
        // upadte profile returns promise thays why we have used async await
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        // navigate to the homepage
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // if some erorr exists,
        setErr(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <div className="register_container">
        <h2>Register</h2>
        <form className="form_container" onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <b className="err">{err}</b>
          <button className="btn" disabled={submitButtonDisabled}>
            Sign Up
          </button>
        </form>
        <p>
          Have an account <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
