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

import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders.js";
import codingImage from "../../Images/Home/Coding/Background/Coding12.jpeg";
import ProgressiveImage from "../../Utils/ProgressiveImage.js";

const Coding = (props) => {
  const [isHeadersFadedIn, setIsHeadersFadeIn] = useState(false);

  const [isCardFadedIn, setIsCardFadedIn] = useState(false);

  const [periodIndex, setPeriodIndex] = useState(0);

  const [cardIndex, setCardIndex] = useState(0);

  const header = {
    primary: "Coding",
    secondary:
      "From 2022, my coding journey consisted of self-studying, being enrolled in a coding bootcamp, and working as a full-stack software developer",
  };

  const periods = [
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
            "Before beginning my bootcamp journey, I worked as an online tutor. A problem I wanted to solve was being able to share the notes I collected in a convenient way",
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
            "As a full-stack developer at AccumTech, I work on maintaining our website called ClaimGen Portal. It is a place where Health Insurance Vendors interact with patient records",
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

  const card = periods[periodIndex].cards[cardIndex];

  const codingPageRef = useRef(null);

  useEffect(() => {
    return progressiveBackgroundImageLoader(codingPageRef.current, codingImage);
  }, []);

  useEffect(() => {
    if (props.windowHeightPosition >= 2100) {
      const fadeInInterval = setInterval(() => {
        setIsHeadersFadeIn(true);
        clearInterval(fadeInInterval);
        return;
      }, 100);
    }
  }, [props.windowHeightPosition]);

  useEffect(() => {
    if (isHeadersFadedIn) {
      const fadeInCardInterval = setInterval(() => {
        setIsCardFadedIn(true);
        clearInterval(fadeInCardInterval);
        return;
      }, 1500);
    }
  }, [isHeadersFadedIn]);

  const handleLeftClick = () => {
    let currentPeriodIndex = periodIndex;
    let currentCardIndex = cardIndex;

    if (currentCardIndex === 0) {
      --currentPeriodIndex;
      currentCardIndex = periods[currentPeriodIndex].cards.length - 1;
      setPeriodIndex(currentPeriodIndex);
      setCardIndex(currentCardIndex);
    } else {
      --currentCardIndex;
      setCardIndex(currentCardIndex);
    }
  };

  const handleRightClick = () => {
    let currentPeriodIndex = periodIndex;
    let currentCardIndex = cardIndex;

    if (currentCardIndex === periods[periodIndex].cards.length - 1) {
      ++currentPeriodIndex;
      currentCardIndex = 0;
      setPeriodIndex(currentPeriodIndex);
      setCardIndex(currentCardIndex);
    } else {
      ++currentCardIndex;
      setCardIndex(currentCardIndex);
    }
  };

  return (
    <div className="Coding-Screen Phone" ref={codingPageRef}>
      <div className="Coding-Content Phone">
        <div
          className={`Coding-Header-Container ${
            isHeadersFadedIn ? "Fade-In" : ""
          }`}
        >
          <div className="Coding-Header-Primary">{header.primary}</div>
          <div className="Coding-Header-Secondary Phone">
            {header.secondary}
          </div>
        </div>

        <div
          className={`Coding-Card-Buttons-Container-Phone ${
            isCardFadedIn ? "Fade-In" : ""
          }`}
        >
          <div
            className={`Coding-PhoneCard-Button ${
              periodIndex === 0 && cardIndex === 0 ? "Disabled" : ""
            }`}
            onClick={handleLeftClick}
          >
            <Icon name="angle left" size="huge" />
          </div>
          <div className="Coding-Card Phone">
            {card.websiteLinkUrl ? (
              <a
                href={card.websiteLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%" }}
              >
                <ProgressiveImage
                  smallSrc={card.miniMediaUrl}
                  largeSrc={card.mediaUrl}
                  alt={card.mediaAltText}
                  className="Coding-Card-Image"
                />
              </a>
            ) : (
              <ProgressiveImage
                smallSrc={card.miniMediaUrl}
                largeSrc={card.mediaUrl}
                alt={card.mediaAltText}
                className="Coding-Card-Image"
              />
            )}
            <div className="Coding-Card-Header">{card.header}</div>
            <div className="Coding-Card-Text">{card.mediaCaption}</div>
          </div>
          <div
            className={`Medicine-PhoneCard-Button ${
              periodIndex === periods.length - 1 &&
              cardIndex === periods[periodIndex].cards.length - 1
                ? "Disabled"
                : ""
            }`}
            onClick={handleRightClick}
          >
            <Icon name="angle right" size="huge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
