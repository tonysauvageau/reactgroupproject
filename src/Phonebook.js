import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm';

class Phonebook extends Component {

    constructor(props) {
        super(props)
        this.state = { items: [] }
    }

    addContact = (name, number) => {
        let item = { name, number }
        let items = [item, ...this.state.items]
        this.setState({ items, nextId: ++this.state.nextId })
    }

  render() {
    return (
      <div className="container">
        <h2>The phonebook</h2>
        <PhonebookForm addContact={this.addItem} />
                
      </div>
    );
  }
}

export default Phonebook;
