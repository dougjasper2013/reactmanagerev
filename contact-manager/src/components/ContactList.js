import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h3>Contacts</h3>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
