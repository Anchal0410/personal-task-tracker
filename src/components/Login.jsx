import { useState } from "react";
import { saveUsername } from "../utils/localStorage";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      saveUsername(username.trim());
      onLogin(username.trim());
    } else {
      setError("Please enter a username");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to Task Tracker</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              placeholder="Enter your username"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
