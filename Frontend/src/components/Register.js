import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconButton, InputAdornment, TextField, MenuItem } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/register.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleShowConfirmPasswordToggle = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
    } else if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Invalid password. It must contain at least 8 characters, one capital letter, one special character, and numbers."
      );
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      // Store user information in local storage
      localStorage.setItem("registeredUser", JSON.stringify({ email, password, name, address, gender, userType }));

      setSuccessMessage("Registration successful!");
      setErrorMessage("");

      // Simulate a delay to show the success message before navigating to the home page
      setTimeout(() => {
        navigate("/login"); // Replace "/" with the path to your home page
      }, 1500);
    }
  };

  return (
    <div className="register-page">
    <div className="container">
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <TextField
            select
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            required
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        </div>
        <div className="form-group">
          <label htmlFor="userType">User Type</label>
          <TextField
            select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            required
          >
            <MenuItem value="homeowners">Homeowner</MenuItem>
            <MenuItem value="professionals">Professionals</MenuItem>
            <MenuItem value="Contractor">Contractor</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </TextField>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowConfirmPasswordToggle} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
    </div>
  );
};

export default RegisterForm;
