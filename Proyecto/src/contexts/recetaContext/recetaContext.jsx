import React, {createContext, useState} from 'react';

// Create the context
export const RecetaContext = createContext();

// Create the provider component
export const RecetaProvider = ({children}) => {
  // State to hold the receta data
  const [receta, setReceta] = useState({});

  return (
    <RecetaContext.Provider value={{receta, setReceta}}>
      {children}
    </RecetaContext.Provider>
  );
};
