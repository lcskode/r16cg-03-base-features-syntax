import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // set default state
  state = {
    persons: [
      {name: 'Jack', age: 21},
      {name: 'Jill', age: 22},
      {name: 'Rose', age: 23}
    ]
  }

  // event handler for Change Names button when clicked
  changeNamesHandler = () => {
    // console.log("Change Names button was clicked!");
    // change names when Change Names button is clicked
    this.setState({
      persons: [
        {name: 'JackJack', age: 21},
        {name: 'JillJill', age: 22},
        {name: 'RoseRose', age: 23}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
         {/* Added onClick event for buttons */}
        <button onClick={this.changeNamesHandler}>Change Names</button>
        {/* Accessing state values */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> 
          My hobbies: coding and sleeping. 
        </Person>     
      </div>
    );
  }
}

export default App;
