import React from 'react';
import PropTypes from 'prop-types';

function ContactsList({ filter, contacts, deleteContact }) {
  const filteredContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type='button' data-id={contact.id} onClick={deleteContact}>Delete</button>
        </li>
      ))}
    </ul>
    // )
  );
}

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
