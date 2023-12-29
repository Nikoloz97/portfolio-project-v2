import { createContext, useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";

// UserContext = allows state to persist/change among various routes

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1444px)",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isUserSignedIn,
        setIsUserSignedIn,
        isDesktop,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
