import { async } from "@firebase/util";
import { Alert } from "bootstrap";
import React, { useState } from "react";
import cntower from "../assets/cntower.jpeg";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { signIn } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email,password, navigate)
    console.log(email, password);

  }


  return (
    <div className="loginContainer">
      <div className="cnImage">
        <img src={cntower} alt="cntower" />
      </div>
      <div className="loginDiv">
        <h1>Login</h1>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <div className="loginDivInside">
          <div className="formDiv">
            <form onSubmit={handleLogin}>
              <label className="formLabel" htmlFor="email">
                Email
              </label>
              <input
                className="formInput"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email adress..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="formLabel" htmlFor="password">
                Password
              </label>
              <input
                className="formInput"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="forgotPasswordButton">Forgot password?</button>
              <button className="loginButton" type="submit" value='Login'>Login</button>
              <button className="loginButton">
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
