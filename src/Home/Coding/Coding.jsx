import React, { useState, useEffect, useRef } from "react";
import "./Coding.css";
import { Icon } from "semantic-ui-react";

import moshImage from "../../Images/Home/Coding/Content/Self_Teach/Mosh_New.png";
import moshImageMini from "../../Images/Home/Coding/Content/Self_Teach/Mosh_New-Mini.png";

import pythonImage from "../../Images/Home/Coding/Content/Self_Teach/PythonDoc2_New.png";
import pythonImageMini from "../../Images/Home/Coding/Content/Self_Teach/PythonDoc2_New-Mini.png";

import georgiaImage from "../../Images/Home/Coding/Content/Self_Teach/Georgia1_New.png";
import georgiaImageMini from "../../Images/Home/Coding/Content/Self_Teach/Georgia1_New-Mini.png";

import biochemImage from "../../Images/Home/Coding/Content/Bootcamp/BiochemSite.png";
import biochemImageMini from "../../Images/Home/Coding/Content/Bootcamp/BiochemSite-Mini.png";

import nickJsImage from "../../Images/Home/Coding/Content/Bootcamp/NickJS_Square.png";
import nickJsImageMini from "../../Images/Home/Coding/Content/Bootcamp/NickJS_Square-Mini.png";

import restaurantTinderImage from "../../Images/Home/Coding/Content/Bootcamp/RT_Square.png";
import restaurantTinderImageMini from "../../Images/Home/Coding/Content/Bootcamp/RT_Square-Mini.png";

import portalImage from "../../Images/Home/Coding/Content/Work/ClaimGenPortal_Square.png";
import portalImageMini from "../../Images/Home/Coding/Content/Work/ClaimGenPortal_Square-Mini.png";

import cookiesImage from "../../Images/Home/Coding/Content/Work/CookiesArticle_Square.png";
import cookiesImageMini from "../../Images/Home/Coding/Content/Work/CookiesArticle_Square-Mini.png";

import financeImage from "../../Images/Home/Coding/Content/Work/FinanceWebsite_Square.png";
import financeImageMini from "../../Images/Home/Coding/Content/Work/FinanceWebsite_Square-Mini.png";

import codingImage from "../../Images/Home/Coding/Background/Coding12.jpeg";
import codingImageMini from "../../Images/Home/Coding/Background/Coding12-Mini.jpeg";

import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders";
import ProgressiveImage from "../../Utils/ProgressiveImage";

const Coding = (props) => {
  const [periodIndex, setPeriodIndex] = useState(0);

  const header = {
    primary: "Coding",
    secondary:
      "From 2022, my coding journey consisted of self-studying, being enrolled in a coding bootcamp, and working as a full-stack software developer",
  };

  const [isHeadersFadedIn, setIsHeadersFadeIn] = useState(false);

  const [isCardSetFadedIn, setIsCardSetFadedIn] = useState([
    false,
    false,
    false,
  ]);

  const codingPeriods = [
    {
      title: "Self-Teaching & Exploration",
      period: "Jan - Aug 2022",
      cards: [
        {
          header: "Tutorials",
          techStack: null,
          miniMediaUrl: moshImageMini,
          mediaUrl: moshImage,
          mediaAltText: "Mosh logo",
          websiteLinkUrl: null,
          mediaCaption:
            "I began my coding journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
        },
        {
          header: "Note Taking",
          techStack: null,
          miniMediaUrl: pythonImageMini,
          mediaUrl: pythonImage,
          mediaAltText: "Google docs Python notes",
          websiteLinkUrl: null,
          mediaCaption:
            "I took thorough notes. In addition to python above, I made notes to an Intro to Programming video by FreeCodeCamp and HTML/CSS by mosh",
        },
        {
          header: "First Website",
          techStack: "HTML, CSS",
          miniMediaUrl: georgiaImageMini,
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
          miniMediaUrl: restaurantTinderImageMini,
          mediaUrl: restaurantTinderImage,
          mediaAltText: "Github for capstone project",
          websiteLinkUrl: null,
          mediaCaption:
            "My bootcamp's curriculum involved 3 group coding projects. The last one involved a restaurant match-making system called Restaurant Tinder. It consists of the following tech stack: Vue.js, C#, and SQL",
        },
        {
          header: "First Portfolio Page",
          techStack: "JavaScript",
          miniMediaUrl: nickJsImageMini,
          mediaUrl: nickJsImage,
          mediaAltText: "Intro screen to my portfolio page",
          websiteLinkUrl: "https://nikoloz97.github.io/",
          mediaCaption:
            "During my downtime, I made a portfolio page using Vanilla JavaScript",
        },
        {
          header: "First Passion Project",
          techStack: "Vue, C#, SQLite",
          miniMediaUrl: biochemImageMini,
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
          miniMediaUrl: portalImageMini,
          mediaUrl: portalImage,
          mediaAltText: "One of the screens of the ClaimGen Portal website",
          websiteLinkUrl: null,
          mediaCaption:
            "As a full-stack developer at AccumTech, I work on fixing bugs and improving features on our website called ClaimGen Portal. It is a place where Business Analysts, Data Operations, and Health Insurance Vendors work with patient insurance claims",
        },
        {
          header: "Technical Doc",
          techStack: null,
          miniMediaUrl: cookiesImageMini,
          mediaUrl: cookiesImage,
          mediaAltText:
            "One of the technical documents written regarding implementation of website Cookies",
          websiteLinkUrl: null,
          mediaCaption:
            "Through every new project, I document my process for other developers to follow accordingly. If novel enough, I conduct presentations in front of my whole developer team",
        },
        {
          header: "Finance Side Project",
          techStack: "TypeScript, React, Express, MongoDB",
          miniMediaUrl: financeImageMini,
          mediaUrl: financeImage,
          mediaAltText: "Home screen of my finance side project",
          websiteLinkUrl: null,
          mediaCaption:
            "Finance Viewer is a side project I have been working on beginning in April 2024. As the name implies, my goal is create a place where users can view all their finances in one location",
        },
      ],
    },
  ];

  const codingPageRef = useRef(null);

  useEffect(() => {
    return progressiveBackgroundImageLoader(codingPageRef.current, codingImage);
  }, []);

  useEffect(() => {
    if (props.windowHeightPosition >= 2400) {
      const fadeInInterval = setInterval(() => {
        setIsHeadersFadeIn(true);
        clearInterval(fadeInInterval);
        return;
      }, 100);
    }
  }, [props.windowHeightPosition]);

  useEffect(() => {
    if (isHeadersFadedIn) {
      const fadeInCardOneInterval = setInterval(() => {
        setIsCardSetFadedIn(() => [true, false, false]);
        clearInterval(fadeInCardOneInterval);
        return;
      }, 200);
    }
  }, [isHeadersFadedIn]);

  useEffect(() => {
    if (isCardSetFadedIn[0]) {
      const fadeInCardTwoInterval = setInterval(() => {
        setIsCardSetFadedIn(() => [true, true, false]);
        clearInterval(fadeInCardTwoInterval);
        return;
      }, 500);
    }
    if (isCardSetFadedIn[1]) {
      const fadeInCardThreeInterval = setInterval(() => {
        setIsCardSetFadedIn(() => [true, true, true]);
        clearInterval(fadeInCardThreeInterval);
        return;
      }, 500);
    }
  }, [isCardSetFadedIn]);

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
    <div className="Coding-Screen Desktop" ref={codingPageRef}>
      <div className="Coding-Content">
        <div
          className={`Coding-Header-Container ${
            isHeadersFadedIn ? "Fade-In" : ""
          }`}
        >
          <div className="Coding-Header-Primary">{header.primary}</div>
          <div className="Coding-Header-Secondary">{header.secondary}</div>
        </div>
        <div className="Coding-Cards-Buttons-Container">
          <div className="Coding-Cards-Container">
            {codingPeriods[periodIndex].cards.map((codingCard, index) => (
              <div
                key={index}
                className={`Coding-Card ${
                  index === (1 || 4 || 7) ? "Odd" : "Even"
                } ${isCardSetFadedIn[index] ? "Fade-In" : ""}`}
              >
                {codingCard.websiteLinkUrl ? (
                  <a
                    href={codingCard.websiteLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    <ProgressiveImage
                      smallSrc={codingCard.miniMediaUrl}
                      largeSrc={codingCard.mediaUrl}
                      alt={codingCard.description}
                      className="Coding-Card-Image"
                    />
                  </a>
                ) : (
                  <ProgressiveImage
                    smallSrc={codingCard.smallMediaUrl}
                    largeSrc={codingCard.mediaUrl}
                    alt={codingCard.description}
                    className="Coding-Card-Image"
                  />
                )}
                <div className="Coding-Card-Header">{codingCard.header}</div>
                <div className="Coding-Card-Text">
                  {codingCard.mediaCaption}
                </div>
              </div>
            ))}
          </div>

          <div className="Coding-Buttons-Container">
            <div
              className={`Coding-Card-Button ${
                periodIndex === 0 ? "Disabled" : ""
              }`}
              onClick={handleLeftClick}
            >
              <Icon name="angle left" />
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
    </div>
  );
};

export default Coding;
