import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>   
        <Person name="Jack" age="21" />
        <Person name="Jill" age="22" />
        <Person name="Rose" age="23" />     
      </div>
    );
  }
}

export default App;
