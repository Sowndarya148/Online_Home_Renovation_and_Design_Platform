import React, { useState } from 'react';
import './login.css';
import RegistrationPage from './RegistrationPage';

const LoginPage = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);

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

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {!showRegistration && (
        <form onSubmit={handleSubmit} className="login-form" style={{ justifyContent: 'center' }}>
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
          <button type="submit">Login</button>
        </form>
      )}
      {!showRegistration && (
        <p>
          Don't have an account?{' '}
          <button onClick={handleRegisterClick}>Register</button>
        </p>
      )}
      {showRegistration && (
        <RegistrationPage onLoginClick={() => setShowRegistration(false)} />
      )}
    </div>
  );
};

export default LoginPage;