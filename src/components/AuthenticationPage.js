
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthenticationPage.css';

const AuthenticationPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login success and redirect to Home Page
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h1>{isAdmin ? 'Admin Login' : 'User Login'}</h1>
      <div className="auth-form">
        <input type="text" placeholder="Username" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button onClick={handleLogin} className="auth-button">Login</button>
      </div>
      <button onClick={() => setIsAdmin(!isAdmin)} className="toggle-button">
        Switch to {isAdmin ? 'User' : 'Admin'}
      </button>
    </div>
  );
};

export default AuthenticationPage;
*/



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthenticationPage.css';
const AuthenticationPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };
  

  const handleSignUp = () => {
    alert('Sign up successful!');
    setIsSignUp(false); };

  return (
    <div className="auth-container">
      <h1>{isSignUp ? 'Sign Up' : isAdmin ? 'Admin Login' : 'User Login'}</h1>
      <div className="auth-form">
        {isSignUp ? (
          <>
            <input type="text" placeholder="Name" className="auth-input" />
            <input type="email" placeholder="Email" className="auth-input" />
            <input type="tel" placeholder="Phone Number" className="auth-input" />
            <input type="password" placeholder="Password" className="auth-input" />
            <input type="password" placeholder="Confirm Password" className="auth-input" />
            <button onClick={handleSignUp} className="auth-button">Sign Up</button>
          </>
        ) : (
          <>
            <input type="text" placeholder="Username" className="auth-input" />
            <input type="password" placeholder="Password" className="auth-input" />
            <button onClick={handleLogin} className="auth-button">Login</button>
          </>
        )}
      </div>
      {!isSignUp && (
        <button onClick={() => setIsAdmin(!isAdmin)} className="toggle-button">
          Switch to {isAdmin ? 'User' : 'Admin'}
        </button>
      )}
      <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
        {isSignUp ? 'Back to Login' : 'Sign Up'}
      </button>
    </div>
  );
};

export default AuthenticationPage;

