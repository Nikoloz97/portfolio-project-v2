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

  const codingPeriods = [
    {
      title: "Self-Teaching & Exploration",
      period: "Jan - Aug 2022",
      cards: [
        {
          title: "Tutorials",
          mediaUrl: moshImage,
          mediaCaption:
            "I began my coding journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          title: "Note Taking",
          mediaUrl: pythonImage,
          mediaCaption:
            "I took thorough notes. In addition to python above, I made notes to an Intro to Programming video by FreeCodeCamp and HTML/CSS by mosh",
        },
        {
          title: "First Website",
          mediaUrl: georgiaImage,
          mediaCaption:
            "Using my HTML & CSS notes, I created my first website using bootstrap and flat-icons. It was my first instance of putting my front-end skills to practice",
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
    let currentPeriodIndex = periodIndex;
    --currentPeriodIndex;
    setPeriodIndex(currentPeriodIndex);
  };
  const handleRightClick = () => {
    let currentPeriodIndex = periodIndex;
    ++currentPeriodIndex;
    setPeriodIndex(currentPeriodIndex);
  };

  return (
    <div className={`Coding-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Coding-Content">
        <div className="Coding-Headers-Container">
          <div className="Coding-Header">Coding</div>
          <div className="Coding-Subheader-One">
            {codingPeriods[periodIndex].title}
          </div>
          <div className="Coding-Subheader-Two">
            {codingPeriods[periodIndex].period}
          </div>
        </div>

        <div className="Coding-Cards-Buttons-Container">
          <div
            className={`Coding-Card-Button ${
              periodIndex === 0 ? "Disabled" : ""
            }`}
            onClick={handleLeftClick}
          >
            <Icon name="angle left" />
          </div>
          <div className="Coding-Card">
            <img
              src={codingPeriods[periodIndex].cards[0].mediaUrl}
              className="Coding-Card-Image"
              alt="Mosh Youtube Logo"
            />
            <div className="Coding-Card-Header">Tutorials</div>
            <div className="Coding-Card-Text">
              {codingPeriods[periodIndex].cards[0].mediaCaption}
            </div>
          </div>
          <div className="Coding-Card Even">
            <img
              src={codingPeriods[periodIndex].cards[1].mediaUrl}
              className="Coding-Card-Image"
              alt="python google docs"
            />
            <div className="Coding-Card-Header">Note Taking</div>
            <div className="Coding-Card-Text">
              {codingPeriods[periodIndex].cards[1].mediaCaption}
            </div>
          </div>
          <div className="Coding-Card">
            <img
              src={codingPeriods[periodIndex].cards[2].mediaUrl}
              className="Coding-Card-Image"
              alt="Georgia website"
            />
            <div className="Coding-Card-Header">Website</div>
            <div className="Coding-Card-Text">
              {codingPeriods[periodIndex].cards[2].mediaCaption}
            </div>
          </div>
          <div
            className={`Coding-Card-Button ${
              periodIndex === codingPeriods.length - 1 ? "Disabled" : ""
            }`}
            onClick={handleRightClick}
          >
            <Icon name="angle right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
