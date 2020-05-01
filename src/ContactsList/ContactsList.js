import React from 'react';
import PropTypes from 'prop-types';
import styles from './contacts.module.css';

function ContactsList({ filter, contacts, deleteContact }) {
  const filteredContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles.listItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button className={styles.btnDelete} type='button' data-id={contact.id} onClick={deleteContact}>Delete</button>
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
