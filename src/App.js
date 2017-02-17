import React, { Component } from 'react';
import Phonebook from './Phonebook';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Super cool React app</h1>
        
        <Phonebook />
      </div>
    );
  }
}

export default App;
