import React from "react";
import "./Home.css";
import { useUserContext } from "../UserContext";

const Medicine = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <div>
      <div className={`Medicine-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
        <div className="Medicine-Content">Medicine Test</div>
      </div>
    </div>
  );
};

export default Medicine;
