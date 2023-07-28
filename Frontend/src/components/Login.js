import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/login.css";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get registered user's information from local storage
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (registeredUser && email === registeredUser.email && password === registeredUser.password) {
      setSuccessMessage("Login successful!");
      setErrorMessage("");

      // Simulate a delay to show the success message before navigating to the home page
      setTimeout(() => {
        navigate("/"); // Replace "/" with the path to your home page
      }, 1500);
    } else {
      setErrorMessage("Invalid email or password");
      setSuccessMessage("");
    }
  };

  return (
    <div className="login-page">
    <div className="container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <TextField
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPasswordToggle} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
