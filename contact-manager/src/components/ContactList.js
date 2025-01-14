import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Contacts</h5>
      </div>
      <div className="card-body">
        {contacts.length === 0 ? (
          <p className="text-center">No contacts available</p>
        ) : (
          <ul className="list-group">
            {contacts.map((contact, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{contact.name}</strong>
                  <p className="mb-0">{contact.email}</p>
                </div>
                <button className="btn btn-sm btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContactList;
