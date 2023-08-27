import { createContext, useState, useContext } from "react";

// UserContext = allows state to persist/change among various routes

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, isUserSignedIn, setIsUserSignedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};
