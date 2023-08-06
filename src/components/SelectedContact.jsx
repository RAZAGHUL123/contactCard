import React, { useState, useEffect } from 'react';

const SelectedContact = ({ id, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Failed to fetch', error);
      }
    }
    fetchContact();
  }, [id, setSelectedContactId]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
    </div>
  );
};

export default SelectedContact;
