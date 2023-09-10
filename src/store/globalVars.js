import React, { createContext, useContext, useState } from 'react';

const GlobalProviderContext = createContext();
export const GlobalStateProvider = ({ children }) => {
  const [globalVariables, setGlobalVariables] = useState({
    activeToolId: "",
    activeTags: []
  });
  const updateGlobalVariable = (variableName, newValue) => {
    setGlobalVariables((prevGlobalVariables) => ({
      ...prevGlobalVariables,
      [variableName]: newValue,
    }));
  };
  return (
    <GlobalProviderContext.Provider value={{ globalVariables, updateGlobalVariable }}>
      {children}
    </GlobalProviderContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalProviderContext);


  

