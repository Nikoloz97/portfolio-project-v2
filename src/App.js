import React, { useEffect } from "react";
import AppRouter from "./AppRouter";
import { UserProvider } from "./UserContext";
import "./App.css";

function App() {
  useEffect(() => {
    document.title =
      process.env.NODE_ENV === "development"
        ? "Nick's Portfolio - Dev"
        : "Nick's Portfolio";
  }, []);
  return (
    <div>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
}

export default App;
