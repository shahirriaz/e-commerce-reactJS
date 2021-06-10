import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  //programmaticly change url
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //takes an e because it is inside an form
  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        //inside the history of browser --> push to this page ..> redirect
        auth ? history.push("/") : alert(auth.error);
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        auth ? history.push("/") : alert(auth.error);
        //inside the history of browser --> push to this page ..> redirect
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's fake clone Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Noties and out
          Interest-Based Ads notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
