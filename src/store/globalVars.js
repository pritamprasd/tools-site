import React, { createContext, useContext, useState } from 'react';

const activeToolIdContext = createContext();
export const ActiveToolIdProvider = ({ children }) => {
  const [toolId, setToolId] = useState("");
  return (
    <activeToolIdContext.Provider value={{ toolId, setToolId }}>
      {children}
    </activeToolIdContext.Provider>
  );
};
export const useActiveToolId = () => useContext(activeToolIdContext);


  

