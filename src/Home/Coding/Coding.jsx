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

import portalImage from "../../Images/Home/Coding/Content/Work/ClaimGenPortal.png";
import cookiesImage from "../../Images/Home/Coding/Content/Work/CookiesArticle.png";
import financeImage from "../../Images/Home/Coding/Content/Work/FinanceWebsite.png";

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
          websiteLinkUrl: null,
          mediaCaption:
            "I began my coding journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          header: "Note Taking",
          techStack: null,
          mediaUrl: pythonImage,
          mediaAltText: "Google docs Python notes",
          websiteLinkUrl: null,
          mediaCaption:
            "I took thorough notes. In addition to python above, I made notes to an Intro to Programming video by FreeCodeCamp and HTML/CSS by mosh",
        },
        {
          header: "First Website",
          techStack: "HTML, CSS",
          mediaUrl: georgiaImage,
          mediaAltText: "Website showing my trip in Georgia from 2021",
          websiteLinkUrl: "https://nickgeorgiatrip2021.netlify.app/",
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
          websiteLinkUrl: null,
          mediaCaption:
            "My bootcamp's curriculum involved 3 group coding projects. The last one involved a restaurant match-making system called Restaurant Tinder. It consists of the following tech stack: Vue.js, C#, and SQL",
        },
        {
          header: "First Portfolio Page",
          techStack: "JavaScript",
          mediaUrl: nickJsImage,
          mediaAltText: "Intro screen to my portfolio page",
          websiteLinkUrl: "https://nikoloz97.github.io/",
          mediaCaption:
            "During my downtime, I made a portfolio page using Vanilla JavaScript",
        },
        {
          header: "First Passion Project",
          techStack: "Vue, C#, SQLite",
          mediaUrl: biochemImage,
          mediaAltText: "Intro screen to my biochemistry site",
          websiteLinkUrl: null,
          mediaCaption:
            "Before I began my bootcamp journey, I worked as an online tutor. A frequent problem I faced was being able to share the useful notes I collected in a convenient way. That is when I started creating a website to do exactly that. ",
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
          mediaUrl: portalImage,
          mediaAltText: "One of the screens of the ClaimGen Portal website",
          websiteLinkUrl: null,
          mediaCaption:
            "As a full-stack developer at AccumTech, I work on fixing bugs and improving features on our website called ClaimGen Portal. It is a place where Business Analysts, Data Operations, and Health Insurance Vendors work with patient insurance claims",
        },
        {
          header: "Technical Documentation",
          techStack: null,
          mediaUrl: cookiesImage,
          mediaAltText:
            "One of the technical documents written regarding implementation of website Cookies",
          websiteLinkUrl: null,
          mediaCaption:
            "Through every new project, I document my process for other developers to follow accordingly. If novel enough, I conduct presentations in front of my whole developer team",
        },
        {
          header: "Finance Side Project",
          techStack: "TypeScript, React, Express, MongoDb",
          mediaUrl: financeImage,
          mediaAltText: "Home screen of my finance side project",
          websiteLinkUrl: null,
          mediaCaption:
            "Finance Viewer is a side project I have been working on beginning in April 2024. As the name implies, my goal is create a place where users can view all their finances in one location",
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
            {codingPeriods[periodIndex].cards[2].websiteLinkUrl ? (
              <a
                href={codingPeriods[periodIndex].cards[2].websiteLinkUrl}
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
