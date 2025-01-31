import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAuthPage.css';

const AdminPage = () => {
  const [adminID, setAdminID] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleAdminLogin = async () => {
    if (!adminID || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminID, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message || 'Admin login failed');
      } else {
        setErrorMessage('');
        alert('Admin login successful');
        navigate('/admin-dashboard'); // Navigate to admin dashboard on success
      }
    } catch (error) {
      setErrorMessage('Error connecting to the server');
    }
  };

  return (
    <div className="auth-container">
      <button className="return-button" onClick={() => navigate('/')}>
        ←
      </button>
      <h1>Admin Login</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="auth-form">
        <input
          type="text"
          placeholder="Admin ID"
          className="auth-input"
          value={adminID}
          onChange={(e) => setAdminID(e.target.value)}
        />
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye-icon"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? '👁️' : '👁️‍🗨️'}
          </span>
        </div>
        <button onClick={handleAdminLogin} className="auth-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
