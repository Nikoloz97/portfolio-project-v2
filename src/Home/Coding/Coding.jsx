import React from "react";
import "./Coding.css";
import { useUserContext } from "../../UserContext";

const Coding = (props) => {
  const { isDesktop } = useUserContext();

  const codingData = [
    {
      title: "Self-Taught Exploration",
      period: "Jan - Aug 2022",
      cards: {
        mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
        mediaCaption:
          "I did his courses on HTML, CSS, python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
      },
    },
  ];

  return (
    <div className={`Coding-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Coding-Content">
        <div className="Coding-Headers-Container">
          <div className="Coding-Header">Coding</div>
          <div className="Coding-Subheader-One">Self-Taught Exploration</div>
          <div className="Coding-Subheader-Two">Jan - Aug 2022</div>
        </div>
        <div className="Coding-Cards-Container">
          <div className="Coding-Card">
            <img
              src={require("../../Images/Home/Coding/Content/Mosh.png")}
              style={{ width: "100%" }}
              alt="Mosh Youtube Logo"
            />
            <div className="Coding-Card-Text">
              I did his courses on HTML, CSS, python, and a little bit of Java
              (until I realized it wasn’t the same thing as JavaScript)
            </div>
          </div>
          <div className="Coding-Card">
            <img
              src={require("../../Images/Home/Coding/Content/Mosh.png")}
              style={{ width: "100%" }}
              alt="Python notes scroll-through"
            />
            <div className="Coding-Card-Text">
              I did his courses on HTML, CSS, python, and a little bit of Java
              (until I realized it wasn’t the same thing as JavaScript)
            </div>
          </div>
          <div className="Coding-Card">
            <img
              src={require("../../Images/Home/Coding/Content/Mosh.png")}
              style={{ width: "100%" }}
              alt="Python github screenshot"
            />
            <div className="Coding-Card-Text">
              I did his courses on HTML, CSS, python, and a little bit of Java
              (until I realized it wasn’t the same thing as JavaScript)
            </div>
          </div>
          <div className="Coding-Card">
            <img
              src={require("../../Images/Home/Coding/Content/Mosh.png")}
              style={{ width: "100%" }}
              alt="Georgia website scroll-through"
            />
            <div className="Coding-Card-Text">
              I did his courses on HTML, CSS, python, and a little bit of Java
              (until I realized it wasn’t the same thing as JavaScript)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
