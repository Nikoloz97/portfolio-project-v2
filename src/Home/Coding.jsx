import React from "react";
import "./Home.css";
import { useUserContext } from "../UserContext";

const Coding = (props) => {
  const { isDesktop } = useUserContext();

  return (
    <div className={`Coding-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Coding-Content">
        <div className="Coding-Header">Coding</div>
        <div className="Coding-Subheader-One">Self-Taught Exploration</div>
        <div className="Coding-Subheader-Two">Jan - Aug 2022</div>
        <div className="Coding-Cards-Container">
          <div className="Coding-Card">
            <div>Media 1</div> <div>Media text</div>
          </div>
          <div className="Coding-Card">Media 2</div>
          <div className="Coding-Card">Media 3</div>
          <div className="Coding-Card">Media 4</div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
