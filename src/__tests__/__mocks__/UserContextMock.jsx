import React, { createContext, useContext } from "react";

const UserContext = createContext({
  isDesktop: false,
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children, value }) => (
  <UserContext.Provider value={value}>{children}</UserContext.Provider>
);
