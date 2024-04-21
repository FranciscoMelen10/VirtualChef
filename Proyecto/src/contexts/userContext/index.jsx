// UserContext.js
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const defaultUser = {
    id: "",
  };

  const [user, setUser] = useState(defaultUser);

  const updateUser = (newUserData) => {
    setUser({
      id: newUserData,
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
