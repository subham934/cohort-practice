import React, { createContext } from 'react';

export const UserDataContext = createContext();
const UserContext = (props) => {
  const users = [
    {
      id: 1,
      name: 'Subham Dhar',
      age: 20,
    },
    {
      id: 2,
      name: 'Ankita Sharma',
      age: 22,
    },
    {
      id: 3,
      name: 'Rahul Das',
      age: 24,
    },
    {
      id: 4,
      name: 'Priya Singh',
      age: 21,
    },
    {
      id: 5,
      name: 'Aman Verma',
      age: 23,
    },
  ];
  return (
    <div>
      <UserDataContext.Provider value={users}>
        {props.children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
