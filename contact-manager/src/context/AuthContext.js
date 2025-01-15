// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext with default value false (not logged in)
const AuthContext = createContext();

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Only store authentication state

  const login = (user) => {
    setIsAuthenticated(true); // Set as authenticated when user logs in
    localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
  };

  const logout = () => {
    setIsAuthenticated(false); // Set as not authenticated on logout
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
