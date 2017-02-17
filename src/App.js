import React, { Component } from 'react';
import './App.css';
import Phonebook from './Phonebook';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Super Cool Phone Book App</h1>
        <hr/>
        <div className="row">

           <Phonebook />

        </div>
      </div>
    );
  }
}

export default App;
