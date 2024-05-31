import React from "react";
import "./Home.css";
import { useUserContext } from "../UserContext";

const Coding = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <div className={`Coding-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Coding-Content">
        <div>Coding Section</div>
      </div>
    </div>
  );
};

export default Coding;
