import React from "react";
import AppRouter from "./AppRouter";
import { UserProvider } from "./UserContext";
import "./App.css";

function App() {
  return (
    <div>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </div>
  );
}

export default App;
