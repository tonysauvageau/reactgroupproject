import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm';

class Phonebook extends Component {



  render() {
    return (
      <div className="container">
        <h2>The phonebook</h2>
        <PhonebookForm />
                
      </div>
    );
  }
}

export default Phonebook;
