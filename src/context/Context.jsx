import  { createContext, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: 'john', role: 'student' }}>
      {children}
    </AppContext.Provider>
  );
};
