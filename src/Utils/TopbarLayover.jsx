import React from "react";
import { useUserContext } from "../UserContext.js";
import TopbarDesktop from "../Navbars/TopbarDesktop/TopbarDesktop.jsx";
import TopbarPhone from "../Navbars/TopbarPhone/TopbarPhone.jsx";

// Lays over the topbar to that of the router screen (see AppRouter)

const TopbarLayover = ({ children, toggleSidebarVisibility }) => {
  const { isDesktop } = useUserContext();

  return (
    <div>
      {isDesktop ? (
        <TopbarDesktop />
      ) : (
        <TopbarPhone toggleSidebarVisibility={toggleSidebarVisibility} />
      )}
      {children}
    </div>
  );
};

export default TopbarLayover;
