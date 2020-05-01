import React, { Component } from 'react';
// import { uuid } from 'uuidv4';
// import Form from './Form/Form';
import { Form1 } from './Form/Form1';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // name: '',
    // number: '',
  };

  // handlerSubmit = e => {
  //   e.preventDefault();
  //   const { name, number } = this.state;
  //   const newUser = { id: uuid(), name, number };

  //   const isName = this.state.contacts.find(contact => name === contact.name);
  //   if (isName) {
  //     alert(`${name} is already contacts.`);
  //     this.setState(prev => ({
  //       name: '',
  //       number: '',
  //     }));
  //     return;
  //   }

  //   this.setState(prev => ({
  //     contacts: [...prev.contacts, newUser],
  //     name: '',
  //     number: '',
  //   }));
  // };

  // ==================
  addNewUser = newUser => {
    this.setState(prev => ({
      contacts: [...prev.contacts, newUser],
    }));
  };
  // ================

  handlerOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteContact = e => {
    const delContact = this.state.contacts.filter(
      contact => contact.id !== e.target.dataset.id,
    );
    this.setState({
      contacts: [...delContact],
    });
  };

  render() {
    const {/* name, number,*/ filter, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        {/* <Form
          name={name}
          number={number}
          handlerOnChange={this.handlerOnChange}
          handlerSubmit={this.handlerSubmit}
        /> */}
        <Form1 contacts={contacts} addNewUser={this.addNewUser} />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          contacts={contacts}
          handlerOnChange={this.handlerOnChange}
        />
        <ContactsList
          filter={filter}
          contacts={contacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
