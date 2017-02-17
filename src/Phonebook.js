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
      <div>
        <div className="col s12 m4">
         <PhonebookForm addContactItem={this.addContact}/>
        </div>
        <div className="col s12 m8">
          <p><b>My Phonebook</b></p>
          <ContactList contacts={this.state.contacts}/>
        </div>
      </div>
    );
  }
}

export default Phonebook;
