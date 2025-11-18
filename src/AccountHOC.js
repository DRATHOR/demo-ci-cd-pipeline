import React from 'react';

const AccountHOC = (Component) => {
  return (props) => {
    console.log('you are inside HOC', { props });
    return <Component {...props} />;
  };
};

export default AccountHOC;
