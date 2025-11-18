import React from 'react';

// Functional Component
const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to your React app.</p>
    </div>
  );
};

export default Greeting;
