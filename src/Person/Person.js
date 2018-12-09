import React from 'react';

const person = (props) => {
  // Add dynamic content
  // return <p>I'm a person and I'm {Math.floor(Math.random() * 30)}</p>
  
  // Used props instead of dynamic content
  // Added props.children to display other elements 
  return (
    <div>
      {/* pass the method changeNamesHandler from App.js by declaring onClick={props.click}*/}
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old. {props.children}
        </p>
    </div>
  );
}

export default person;