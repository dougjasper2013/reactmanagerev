// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // To get auth state
import { useNavigate } from 'react-router-dom'; // For navigation
import ContactForm from '../components/ContactForm'; // Import the ContactForm component
import ContactList from '../components/ContactList'; // Import the ContactList component

function Dashboard() {
  const { isAuthenticated } = useAuth(); // Get auth state from context
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  // Redirect to login if the user is not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // We redirect immediately if not authenticated
  }

  return (
    <div className="container mt-5">
      <h2>Welcome to Your Dashboard!</h2>
      <p>Manage your contacts below:</p>
      
      <ContactForm /> {/* Render ContactForm */}
      <ContactList /> {/* Render ContactList */}
    </div>
  );
}

export default Dashboard;
