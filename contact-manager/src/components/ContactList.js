// src/components/ContactList.js
import React, { useEffect, useState } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  // Load contacts from localStorage on mount
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  return (
    <div className="card p-4">
      <h3>Contact List</h3>
      {contacts.length > 0 ? (
        <ul className="list-group">
          {contacts.map((contact, index) => (
            <li key={index} className="list-group-item">
              <strong>{contact.name}</strong>: {contact.phone}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts added yet.</p>
      )}
    </div>
  );
}

export default ContactList;
