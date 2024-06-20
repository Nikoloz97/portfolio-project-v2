import React, { useState } from "react";
import "./Coding.css";
import { useUserContext } from "../../UserContext";
import { Icon } from "semantic-ui-react";

import moshImage from "../../Images/Home/Coding/Content/Self_Teach/Mosh.png";
import pythonImage from "../../Images/Home/Coding/Content/Self_Teach/PythonDoc1.png";
import georgiaImage from "../../Images/Home/Coding/Content/Self_Teach/Georgia1.png";

import biochemImage from "../../Images/Home/Coding/Content/Bootcamp/BiochemSite1.png";
import nickJsImage from "../../Images/Home/Coding/Content/Bootcamp/NickJS1.png";
import restaurantTinderImage from "../../Images/Home/Coding/Content/Bootcamp/RT1.png";

const Coding = () => {
  const { isDesktop } = useUserContext();

  const [periodIndex, setPeriodIndex] = useState(0);

  const codingPeriods = [
    {
      title: "Self-Teaching & Exploration",
      period: "Jan - Aug 2022",
      cards: [
        {
          header: "Tutorials",
          techStack: null,
          mediaUrl: moshImage,
          mediaAltText: "Mosh logo",
          mediaLinkUrl: null,
          mediaCaption:
            "I began my coding journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          header: "Note Taking",
          techStack: null,
          mediaUrl: pythonImage,
          mediaAltText: "Google docs Python notes",
          mediaLinkUrl: null,
          mediaCaption:
            "I took thorough notes. In addition to python above, I made notes to an Intro to Programming video by FreeCodeCamp and HTML/CSS by mosh",
        },
        {
          header: "First Website",
          techStack: "HTML, CSS",
          mediaUrl: georgiaImage,
          mediaAltText: "Website showing my trip in Georgia from 2021",
          mediaLinkUrl: "https://nickgeorgiatrip2021.netlify.app/",
          mediaCaption:
            "Using my HTML & CSS notes, I created my first website with the help of bootstrap. It was my first instance of putting my front-end skills to practice. Click on the image above to see the website",
        },
      ],
    },
    {
      title: "Tech Elevator (Coding Bootcamp)",
      period: "Sept - Dec 2022",
      cards: [
        {
          header: "Restaurant Tinder",
          techStack: "Vue.js, C#, SQL",
          mediaUrl: restaurantTinderImage,
          mediaAltText: "Github for capstone project",
          mediaLinkUrl: null,
          mediaCaption:
            "My bootcamp's curriculum involved 3 group coding projects. The last one involved a restaurant match-making system called Restaurant Tinder. It consists of the following tech stack: Vue.js, C#, and SQL",
        },
        {
          header: "First Portfolio Page",
          techStack: "JavaScript",
          mediaUrl: nickJsImage,
          mediaAltText: "Intro screen to my portfolio page",
          mediaLinkUrl: null,
          mediaCaption:
            "During my downtime, I made a portfolio page using Vanilla JavaScript",
        },
        {
          header: "First Passion Project",
          techStack: "Vue, C#, SQLite",
          mediaUrl: biochemImage,
          mediaAltText: "Intr screen to my biochemistry site",
          mediaLinkUrl: null,
          mediaCaption:
            "I worked as an online tutor before my bootcamp. It was there that I saved useful notes into various word documents. My first passion project was building a website where such notes could be shared with my students",
        },
      ],
    },
    {
      title: "AccumTech (Work)",
      period: "April 2023 - Present",
      cards: [
        {
          header: "ClaimGen Website",
          techStack: "React, ASP.NET, SQL",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaAltText: "",
          mediaLinkUrl: null,
          mediaCaption:
            "I did his courses on HTML, CSS, python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          header: "Technical Documentation",
          techStack: null,
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaAltText: "",
          mediaLinkUrl: null,
          mediaCaption:
            "I really went overboard with the notes. In addition to the one above, I made notes to: Intro to Programming and HTML",
        },
        {
          header: "Finance Side Project",
          techStack: "TypeScript, React, Express, MongoDb",
          mediaUrl: "../Images/Home/Coding/Content/Mosh.png",
          mediaAltText: "",
          mediaLinkUrl: null,
          mediaCaption:
            "The notes also gave me introduction to using a code editor and source control",
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
              alt={codingPeriods[periodIndex].cards[0].mediaAltText}
            />
            <div className="Coding-Card-Header">
              {codingPeriods[periodIndex].cards[0].header}
            </div>
            <div className="Coding-Card-Text">
              {codingPeriods[periodIndex].cards[0].mediaCaption}
            </div>
          </div>
          <div className="Coding-Card Even">
            <img
              src={codingPeriods[periodIndex].cards[1].mediaUrl}
              className="Coding-Card-Image"
              alt={codingPeriods[periodIndex].cards[1].mediaAltText}
            />
            <div className="Coding-Card-Header">
              {codingPeriods[periodIndex].cards[1].header}
            </div>
            <div className="Coding-Card-Text">
              {codingPeriods[periodIndex].cards[1].mediaCaption}
            </div>
          </div>
          <div className="Coding-Card">
            {codingPeriods[periodIndex].cards[2].mediaLinkUrl ? (
              <a
                href={codingPeriods[periodIndex].cards[2].mediaLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={codingPeriods[periodIndex].cards[2].mediaUrl}
                  className="Coding-Card-Image"
                  alt={codingPeriods[periodIndex].cards[2].mediaAltText}
                />
              </a>
            ) : (
              <img
                src={codingPeriods[periodIndex].cards[2].mediaUrl}
                className="Coding-Card-Image"
                alt={codingPeriods[periodIndex].cards[2].mediaAltText}
              />
            )}

            <div className="Coding-Card-Header">
              {codingPeriods[periodIndex].cards[2].header}
            </div>
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
