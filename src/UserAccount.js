/* eslint-disable react/prop-types */
import React from 'react';

const UserAccount = (props) => {
  console.log('User Account Prop::');

  return (
    <div style={styles.container}>
      <h2>User Account</h2>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Email:</strong> {props.email}
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default UserAccount;
