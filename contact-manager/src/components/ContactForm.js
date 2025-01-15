// src/components/ContactForm.js
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For programmatic navigation

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Save contact data to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, phone };
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    storedContacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(storedContacts));
    setName(''); // Clear the form
    setPhone('');
  };

  return (
    <div className="card p-4 mb-4">
      <h3>Add New Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default ContactForm;
