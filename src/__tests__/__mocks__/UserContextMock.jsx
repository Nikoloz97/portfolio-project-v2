import { createContext, useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";

// UserContext = allows state to persist/change among various routes

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const MockUserProvider = ({ children }) => {
  const [user, setUser] = useState({ userId: 123 });
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1444px)",
    // and (max-width: 1599px)",
  });

  const isMonitor = useMediaQuery({
    query: "(min-width:1600px)",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isUserSignedIn,
        setIsUserSignedIn,
        isDesktop,
        isMonitor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
