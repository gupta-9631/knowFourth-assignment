import "./App.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // if user logged in successfully set user name
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  console.log(userName);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
