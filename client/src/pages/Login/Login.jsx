import { useContext, useRef } from "react";
import { loginCall } from "../../apiCall";
import { LoginContext } from "../../context/LoginContext";

import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(LoginContext);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(
      "email and password",
      email.current.value,
      password.current.value
    );
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user, isFetching, error);

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-text-container">
          <h2 className="site-name">Social Media</h2>
          <span className="site-text">
            Lets connect with people around the world.
          </span>
        </div>
        <form className="login-card" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            ref={email}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            ref={password}
            minLength="6"
            maxLength="30"
            className="login-input"
          />
          <button className="login-button">
            {isFetching ? "Loading" : "Login"}
          </button>
          <span className="login-forget-text">Forgot Password?</span>
          <button className="create-account-button">Create new account</button>
        </form>
      </div>
    </div>
  );
}
