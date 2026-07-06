import React, { createContext, useState } from 'react';

export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('Light');

  return (
    <ThemeDataContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
