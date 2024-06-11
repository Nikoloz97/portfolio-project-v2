import React, { useState } from "react";
import "./Coding.css";
import { useUserContext } from "../../UserContext";
import { Icon } from "semantic-ui-react";
import moshImage from "../../Images/Home/Coding/Content/Self_Teach/Mosh.png";
import pythonNotesVideo from "../../Images/Home/Coding/Content/Self_Teach/PythonNotes.mp4";
import pythonDocVideo from "../../Images/Home/Coding/Content/Self_Teach/PythonDocZoomed.mp4";
import georgiaVideo from "../../Images/Home/Coding/Content/Self_Teach/Georgia2021.mp4";

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
              <div>Tutorials</div>
              <img
                src={moshImage}
                style={{ width: "60%" }}
                alt="Mosh Youtube Logo"
              />
              <div className="Coding-Card-Text">
                I did Mosh's courses on HTML, CSS, Python, and a little bit of
                Java (until I realized it wasn’t the same thing as JavaScript)
              </div>
            </div>
            <div className="Coding-Card">
              <div style={{ height: "20px" }}>Note Taking</div>
              <video
                src={pythonDocVideo}
                style={{ width: "70%" }}
                controls
                alt="Python doc scroll-through"
              />
              <div className="Coding-Card-Text">
                I really went overboard with the notes. In addition to the one
                above, I made notes to: Intro to Programming and HTML
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
