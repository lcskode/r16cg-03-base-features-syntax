import React from 'react';

const person = (props) => {
  // Add dynamic content
  // return <p>I'm a person and I'm {Math.floor(Math.random() * 30)}</p>
  
  // Used props instead of dynamic content
  return <p>I'm {props.name} and I'm {props.age} years old.</p>
}

export default person;