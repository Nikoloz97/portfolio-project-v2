import React, { useState } from "react";
import "./Medicine.css";
import { useUserContext } from "../../UserContext";
import { Icon } from "semantic-ui-react";

const Medicine = (props) => {
  const { isDesktop } = useUserContext();

  const [periodIndex, setPeriodIndex] = useState(0);

  const medPeriods = [
    {
      title: "Self-Teaching & Exploration",
      period: "Jan - Aug 2022",
      cards: [
        {
          header: "Tutorials",
          techStack: null,
          mediaUrl: "moshImage",
          mediaAltText: "Mosh logo",
          websiteLinkUrl: null,
          mediaCaption:
            "I began my medicine journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          header: "Note Taking",
          techStack: null,
          mediaUrl: "pythonImage",
          mediaAltText: "Google docs Python notes",
          websiteLinkUrl: null,
          mediaCaption:
            "I took thorough notes. In addition to python above, I made notes to an Intro to Programming video by FreeCodeCamp and HTML/CSS by mosh",
        },
        {
          header: "First Website",
          techStack: "HTML, CSS",
          mediaUrl: "georgiaImage",
          mediaAltText: "Website showing my trip in Georgia from 2021",
          websiteLinkUrl: "https://nickgeorgiatrip2021.netlify.app/",
          mediaCaption:
            "Using my HTML & CSS notes, I created my first website with the help of bootstrap. It was my first instance of putting my front-end skills to practice. Click on the image above to see the website",
        },
      ],
    },
    {
      title: "Tech Elevator (Medicine Bootcamp)",
      period: "Sept - Dec 2022",
      cards: [
        {
          header: "Restaurant Tinder",
          techStack: "Vue.js, C#, SQL",
          mediaUrl: "restaurantTinderImage",
          mediaAltText: "Github for capstone project",
          websiteLinkUrl: null,
          mediaCaption:
            "My bootcamp's curriculum involved 3 group medicine projects. The last one involved a restaurant match-making system called Restaurant Tinder. It consists of the following tech stack: Vue.js, C#, and SQL",
        },
        {
          header: "First Portfolio Page",
          techStack: "JavaScript",
          mediaUrl: "nickJsImage",
          mediaAltText: "Intro screen to my portfolio page",
          websiteLinkUrl: "https://nikoloz97.github.io/",
          mediaCaption:
            "During my downtime, I made a portfolio page using Vanilla JavaScript",
        },
        {
          header: "First Passion Project",
          techStack: "Vue, C#, SQLite",
          mediaUrl: "biochemImage",
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
          mediaUrl: "portalImage",
          mediaAltText: "One of the screens of the ClaimGen Portal website",
          websiteLinkUrl: null,
          mediaCaption:
            "As a full-stack developer at AccumTech, I work on fixing bugs and improving features on our website called ClaimGen Portal. It is a place where Business Analysts, Data Operations, and Health Insurance Vendors work with patient insurance claims",
        },
        {
          header: "Technical Documentation",
          techStack: null,
          mediaUrl: "cookiesImage",
          mediaAltText:
            "One of the technical documents written regarding implementation of website Cookies",
          websiteLinkUrl: null,
          mediaCaption:
            "Through every new project, I document my process for other developers to follow accordingly. If novel enough, I conduct presentations in front of my whole developer team",
        },
        {
          header: "Finance Side Project",
          techStack: "TypeScript, React, Express, MongoDB",
          mediaUrl: "financeImage",
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
    <div className={`Medicine-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Medicine-Content">
        <div className="Medicine-Headers-Container">
          <div className="Medicine-Header">Medicine</div>
          <div className="Medicine-Subheader-One">
            {medPeriods[periodIndex].title}
          </div>
          <div className="Medicine-Subheader-Two">
            {medPeriods[periodIndex].period}
          </div>
        </div>

        <div className="Medicine-Cards-Buttons-Container">
          <div
            className={`Medicine-Card-Button ${
              periodIndex === 0 ? "Disabled" : ""
            }`}
            onClick={handleLeftClick}
          >
            <Icon name="angle left" />
          </div>
          <div className="Medicine-Card">
            <img
              src={medPeriods[periodIndex].cards[0].mediaUrl}
              className="Medicine-Card-Image"
              alt={medPeriods[periodIndex].cards[0].mediaAltText}
            />
            <div className="Medicine-Card-Header">
              {medPeriods[periodIndex].cards[0].header}
            </div>
            {medPeriods[periodIndex].cards[0].techStack ? (
              <div className="Medicine-Card-Tech">
                {`Tech Stack: ${medPeriods[periodIndex].cards[0].techStack}`}
              </div>
            ) : (
              <div></div>
            )}
            <div className="Medicine-Card-Text">
              {medPeriods[periodIndex].cards[0].mediaCaption}
            </div>
          </div>
          <div className="Medicine-Card Even">
            <img
              src={medPeriods[periodIndex].cards[1].mediaUrl}
              className="Medicine-Card-Image"
              alt={medPeriods[periodIndex].cards[1].mediaAltText}
            />
            <div className="Medicine-Card-Header">
              {medPeriods[periodIndex].cards[1].header}
            </div>
            {medPeriods[periodIndex].cards[1].techStack ? (
              <div className="Medicine-Card-Tech">
                {`Tech Stack: ${medPeriods[periodIndex].cards[1].techStack}`}
              </div>
            ) : (
              <div></div>
            )}
            <div className="Medicine-Card-Text">
              {medPeriods[periodIndex].cards[1].mediaCaption}
            </div>
          </div>
          <div className="Medicine-Card">
            {medPeriods[periodIndex].cards[2].websiteLinkUrl ? (
              <a
                href={medPeriods[periodIndex].cards[2].websiteLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={medPeriods[periodIndex].cards[2].mediaUrl}
                  className="Medicine-Card-Image"
                  alt={medPeriods[periodIndex].cards[2].mediaAltText}
                />
              </a>
            ) : (
              <img
                src={medPeriods[periodIndex].cards[2].mediaUrl}
                className="Medicine-Card-Image"
                alt={medPeriods[periodIndex].cards[2].mediaAltText}
              />
            )}

            <div className="Medicine-Card-Header">
              {medPeriods[periodIndex].cards[2].header}
            </div>
            {medPeriods[periodIndex].cards[2].techStack ? (
              <div className="Medicine-Card-Tech">
                {`Tech Stack: ${medPeriods[periodIndex].cards[2].techStack}`}
              </div>
            ) : (
              <div></div>
            )}
            <div className="Medicine-Card-Text">
              {medPeriods[periodIndex].cards[2].mediaCaption}
            </div>
          </div>
          <div
            className={`Medicine-Card-Button ${
              periodIndex === medPeriods.length - 1 ? "Disabled" : ""
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

export default Medicine;
