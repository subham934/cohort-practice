import React from 'react';
import { useContext } from 'react';
import { UserDataContext } from './UserContext';

const Footer = () => {
  const users = useContext(UserDataContext);
  return (
    <div className="absolute bottom-0 w-screen h-10 bg-amber-300">
      <h1>This is Footer — Total users: {users.length}</h1>
    </div>
  );
};

export default Footer;
