// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For programmatic navigation
import { useAuth } from '../context/AuthContext';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = () => {
    const newUser = { username, password };
    localStorage.setItem(username, JSON.stringify(newUser)); // Save user to localStorage
    login(newUser); // Log the user in
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Register</h2>
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
                <button className="btn btn-primary" onClick={handleRegister}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
