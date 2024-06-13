import React, { useState } from "react";
import "./Coding.css";
import { useUserContext } from "../../UserContext";
import { Icon } from "semantic-ui-react";
import moshImage from "../../Images/Home/Coding/Content/Self_Teach/Mosh.png";
import pythonImage from "../../Images/Home/Coding/Content/Self_Teach/PythonDoc1.png";
import georgiaImage from "../../Images/Home/Coding/Content/Self_Teach/Georgia1.png";

const Coding = (props) => {
  const { isDesktop } = useUserContext();

  const [periodIndex, setPeriodIndex] = useState(0);
  const [leftCardIndex, setLeftCardIndex] = useState(0);
  const [rightCardIndex, setRightCardIndex] = useState(1);

  const codingPeriods = [
    {
      title: "Self-Teaching & Exploration",
      period: "Jan - Aug 2022",
      cards: [
        {
          title: "Tutorials",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "I did his courses on HTML, CSS, python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          title: "Note Taking",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "You can say I took thorough notes. In addition to the python, I made notes to: Intro to Programming and HTML",
        },
        {
          title: "First Website",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "Through the help of my HTML notes, I created a website",
        },
      ],
    },
    {
      title: "Tech Elevator (Coding Bootcamp)",
      period: "Sept - Dec 2022",
      cards: [
        {
          title: "Tutorials",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "I did his courses on HTML, CSS, python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          title: "Note Taking",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "I really went overboard with the notes. In addition to the one above, I made notes to: Intro to Programming and HTML",
        },
        {
          title: "VS Code & Github",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            " The notes also gave me introduction to using a code editor and source control",
        },
        {
          title: "First Website",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "Through the help of my HTML notes, I created a website",
        },
      ],
    },
    {
      title: "AccumTech (Work)",
      period: "April 2023 - Present",
      cards: [
        {
          title: "Tutorials",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "I did his courses on HTML, CSS, python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          title: "Note Taking",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "I really went overboard with the notes. In addition to the one above, I made notes to: Intro to Programming and HTML",
        },
        {
          title: "VS Code & Github",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            " The notes also gave me introduction to using a code editor and source control",
        },
        {
          title: "First Website",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaCaption:
            "Through the help of my HTML notes, I created a website",
        },
      ],
    },
  ];

  const handleLeftClick = () => {
    let currentLeftCardIndex = leftCardIndex;
  };
  const handleRightClick = () => {
    let currentRightCardIndex = rightCardIndex;
  };

  return (
    <div className={`Coding-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Coding-Content">
        <div className="Coding-Headers-Container">
          <div className="Coding-Header">Coding</div>
          <div className="Coding-Subheader-One">
            Self-Teaching & Exploration
          </div>

          <div className="Coding-Subheader-Two">Jan - Aug 2022</div>
        </div>

        <div className="Coding-Cards-Buttons-Container">
          <div onClick={handleLeftClick}>
            <Icon name="angle left" />
          </div>
          <div className="Coding-Cards-Container">
            <div className="Coding-Card">
              <img
                src={moshImage}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  maxHeight: "70%",
                }}
                alt="Mosh Youtube Logo"
              />
              <div>Tutorials</div>
              <div className="Coding-Card-Text">
                I began my coding journey with Mosh's courses on HTML, CSS,
                Python, and a little bit of Java (until I realized it wasn’t the
                same thing as JavaScript)
              </div>
            </div>
            <div className="Coding-Card Even">
              <img
                src={pythonImage}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  maxHeight: "70%",
                }}
                alt="python google docs"
              />
              <div style={{ height: "20px" }}>Note Taking</div>
              <div className="Coding-Card-Text">
                I took thorough notes. In addition to python above, I made notes
                to an Intro to Programming video by FreeCodeCamp and HTML/CSS by
                mosh
              </div>
            </div>
            <div className="Coding-Card">
              <img
                src={georgiaImage}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  maxHeight: "70%",
                }}
                alt="Georgia website"
              />
              <div style={{ height: "20px" }}>Website</div>
              <div className="Coding-Card-Text">
                Using my HTML/CSS notes, I created a website using bootstrap and
                flat-icons
              </div>
            </div>
          </div>
          <div onClick={handleRightClick}>
            <Icon name="angle right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
