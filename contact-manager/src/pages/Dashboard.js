import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm'; // Import ContactForm component
import ContactList from '../components/ContactList'; // Import ContactList component

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  // Check if the user is logged in when component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    } else {
      // Load contacts from localStorage if available
      const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      setContacts(savedContacts);
    }
  }, [navigate]);

  const addContact = (contact) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Save to localStorage
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to the Dashboard</h2>
      <p>Manage your contacts here.</p>
      
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Dashboard;
