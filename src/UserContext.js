import { createContext, useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const isPhone = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 800px)",
  });

  const isStrictlyDesktop = useMediaQuery({
    query: "(min-width: 1444px) and (max-width: 1599px)",
  });

  const isMonitor = useMediaQuery({
    query: "(min-width: 1600px)",
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isUserSignedIn,
        setIsUserSignedIn,
        isDesktop,
        isStrictlyDesktop,
        isMonitor,
        isPhone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
