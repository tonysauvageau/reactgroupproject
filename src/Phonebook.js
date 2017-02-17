import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm';
import ContactList from './ContactList';

class Phonebook extends Component {


//NOT SURE WHAT THIS MEANS??
constructor(props) {
  super(props)
  this.state = {contacts: []}
}

addContact=(name, number) =>{
  let contact = {name, number};
  let contacts = [contact, ...this.state.contacts]
  this.setState({contacts})
}

  render() {
    return (
      <div className="container">
        <h2>My Phonebook</h2>
        <PhonebookForm addContactItem={this.addContact}/>
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default Phonebook;
