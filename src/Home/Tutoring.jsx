import React from "react";
import "./Home.css";
import { useUserContext } from "../UserContext";

const Tutoring = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <div className={`Tutoring-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Tutoring-Content">
        <div className="Medicine-Content">
          <div>Tutoring Section</div>
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
