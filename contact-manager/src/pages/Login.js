// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { useAuth } from '../context/AuthContext'; // To use the login method


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login method from context

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem(username)); // Retrieve user from localStorage

    if (user && user.password === password) {
      login(user); // Set user as authenticated in context
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>      
      <div className="container mt-5">
        <h2 className="mb-4">Login</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary w-100" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
