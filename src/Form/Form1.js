import React, { Component } from 'react'
import { uuid } from 'uuidv4';

export class Form extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newUser = {id: uuid(), name, number};
    console.log('id:', uuid() + 'name: ' + name);
    this.setState(prev => ({
      contacts: [...prev.contacts, newUser],
      name: '',
      number: ''
    }));
  };

  handlerOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
   <form onSubmit={this.handlerSubmit}>
      <label>Name<input type="text" name='name' value={name} onChange={this.handlerOnChange} /></label>
      <label>Number<input type="text" name='number' value={number} onChange={this.handlerOnChange} /></label>
      <button type="submit">Add contact</button>
    </form>
      </>
    )
  }
};

