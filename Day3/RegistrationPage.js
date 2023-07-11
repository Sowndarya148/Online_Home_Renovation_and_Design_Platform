import React, { useState } from 'react';
import './login.css';
const RegistrationPage = ({ onLoginClick }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleLoginClick = () => {
    onLoginClick();
  };

  return (
    <div className="registration-page">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className='reg-form' style={{justifyContent:'center'}}>
      <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={handleLoginClick}>Login</button>
      </p>
    </div>
  );
};

export default RegistrationPage;