import React from "react";
import TopbarDesktop from "../Navbars/TopbarDesktop/TopbarDesktop";

// Lays over the topbar-desktop to that of the router screen (see AppRouter)

const TopbarDesktopLayover = ({ children }) => {
  return (
    <div
    // style={{ position: "relative" }}
    >
      <TopbarDesktop />
      {/* <div> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default TopbarDesktopLayover;