import { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();
  const history = useHistory();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== rePassword.current.value) {
      rePassword.current.setCustomValidation("Password doesn't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        rePassword: rePassword.current.value,
      };
      await axios.post("/auth/register", user);
      history.push("/login");
    }
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-text-container">
          <h2 className="site-name">Social Media</h2>
          <span className="site-text">
            Lets connect with people around the world.
          </span>
        </div>
        <form className="register-card" onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            placeholder="username"
            required
            ref={username}
            className="register-input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            ref={email}
            className="register-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            minLength="6"
            maxLength="30"
            ref={password}
            className="register-input"
          />
          <input
            type="password"
            placeholder="Re-enter your password"
            required
            minLength="6"
            maxLength="30"
            ref={rePassword}
            className="register-input"
          />
          <button type="submit" className="register-button">
            Signup
          </button>
          <button className="create-account-button">Log in</button>
        </form>
      </div>
    </div>
  );
}
