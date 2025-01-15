// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Auth context to wrap the app with
import Navbar from './components/Navbar'; // Import Navbar
import Dashboard from './pages/Dashboard'; // Import Dashboard page
import Login from './pages/Login'; // Import Login page
import Register from './pages/Register'; // Import Register page

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Always render Navbar at the top */}
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Login />} /> {/* Login page */}
            <Route path="/register" element={<Register />} /> {/* Register page */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
