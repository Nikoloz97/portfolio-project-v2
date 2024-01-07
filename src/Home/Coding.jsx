import React from "react";
import "./Home.css";
import { useUserContext } from "../UserContext";

const Coding = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <div>
      <div className={`Coding-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
        <div className="Coding-Content">Coding Test</div>
      </div>
    </div>
  );
};

export default Coding;
