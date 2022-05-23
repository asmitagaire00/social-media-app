import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-text-container">
          <h2 className="site-name">Social Media</h2>
          <span className="site-text">
            Lets connect with people around the world.
          </span>
        </div>
        <div className="register-card">
          <input
            type="text"
            placeholder="Username"
            className="register-input"
          />
          <input type="email" placeholder="Email" className="register-input" />
          <input
            type="password"
            placeholder="Password"
            className="register-input"
          />
          <input
            type="password"
            placeholder="Re-enter your password"
            className="register-input"
          />
          <button className="register-button">Signup</button>
          <button className="create-account-button">Log in</button>
        </div>
      </div>
    </div>
  );
}
