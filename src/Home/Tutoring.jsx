import React from "react";
import "./Home.css";
import { useUserContext } from "../UserContext";

const Tutoring = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <div>
      <div className={`Tutoring-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
        <div className="Tutoring-Content">Tutoring Test</div>
      </div>
    </div>
  );
};

export default Tutoring;
