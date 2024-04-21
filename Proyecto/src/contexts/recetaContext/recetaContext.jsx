import React, {createContext, useState} from 'react';

// Create the context
export const RecetaContext = createContext();

// Create the provider component
export const RecetaProvider = ({children}) => {
  // State to hold the receta data
  const [receta, setReceta] = useState({});
  const [imagen, setImagen] = useState(null);

  return (
    <RecetaContext.Provider value={{receta, setReceta, imagen, setImagen}}>
      {children}
    </RecetaContext.Provider>
  );
};
