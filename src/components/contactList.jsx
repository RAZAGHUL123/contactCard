import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

const ContactList = ({ setSelectedContactId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const formattedData = data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        }));
        setContacts(formattedData); 
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => 
            <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
