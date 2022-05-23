import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-text-container">
          <h2 className="site-name">Social Media</h2>
          <span className="site-text">
            Lets connect with people around the world.
          </span>
        </div>
        <div className="login-card">
          <input type="email" placeholder="Email" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button className="login-button">Login</button>
          <span className="login-forget-text">Forgot Password?</span>
          <button className="create-account-button">Create new account</button>
        </div>
      </div>
    </div>
  );
}
