import React, { useState, useEffect, useRef } from "react";
import "./Coding.css";

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

import financeImage from "../../Images/Home/Coding/Content/Work/finance-viewer.png";
import financeImageMini from "../../Images/Home/Coding/Content/Work/FinanceWebsite_Square-Mini.png";

import codingImage from "../../Images/Home/Coding/Background/Coding12.jpeg";

import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders";
import ProgressiveImage from "../../Utils/ProgressiveImage";

const Coding = (props) => {
  const [isHeadersFadedIn, setIsHeadersFadedIn] = useState(false);
  const [isCarouselFadedIn, setIsCarouselFadedIn] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const codingPageRef = useRef(null);

  const header = {
    primary: "Coding",
    secondary:
      "From 2022, my coding journey consisted of self-studying, being enrolled in a coding bootcamp, and working as a full-stack software developer",
  };

  const cards = [
    {
      header: "Tutorials",
      miniMediaUrl: moshImageMini,
      mediaUrl: moshImage,
      mediaAltText: "Mosh logo",
      websiteLinkUrl: null,
      mediaCaption:
        "I began my coding journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
    },
    {
      header: "Note Taking",
      miniMediaUrl: pythonImageMini,
      mediaUrl: pythonImage,
      mediaAltText: "Google docs Python notes",
      websiteLinkUrl: null,
      mediaCaption:
        "I took thorough notes. In addition to python above, I made notes to an Intro to Programming video by FreeCodeCamp and HTML/CSS by mosh",
    },
    {
      header: "First Website",
      miniMediaUrl: georgiaImageMini,
      mediaUrl: georgiaImage,
      mediaAltText: "Website showing my trip in Georgia from 2021",
      websiteLinkUrl: "https://nickgeorgiatrip2021.netlify.app/",
      mediaCaption:
        "Using my HTML & CSS notes, I created my first website with the help of bootstrap. It was my first instance of putting my front-end skills to practice. Click on the image above to see the website",
    },
    {
      header: "Restaurant Tinder",
      miniMediaUrl: restaurantTinderImageMini,
      mediaUrl: restaurantTinderImage,
      mediaAltText: "Github for capstone project",
      websiteLinkUrl: null,
      mediaCaption:
        "My bootcamp's curriculum involved 3 group coding projects. The last one involved a restaurant match-making system called Restaurant Tinder. It consists of the following tech stack: Vue.js, C#, and SQL",
    },
    {
      header: "First Portfolio Page",
      miniMediaUrl: nickJsImageMini,
      mediaUrl: nickJsImage,
      mediaAltText: "Intro screen to my portfolio page",
      websiteLinkUrl: "https://nikoloz97.github.io/",
      mediaCaption:
        "During my downtime, I made a portfolio page using Vanilla JavaScript",
    },
    {
      header: "First Passion Project",
      miniMediaUrl: biochemImageMini,
      mediaUrl: biochemImage,
      mediaAltText: "Intro screen to my biochemistry site",
      websiteLinkUrl: null,
      mediaCaption:
        "Before I began my bootcamp journey, I worked as an online tutor. A frequent problem I faced was being able to share the useful notes I collected in a convenient way. That is when I started creating a website to do exactly that. ",
    },
    {
      header: "ClaimGen Website",
      miniMediaUrl: portalImageMini,
      mediaUrl: portalImage,
      mediaAltText: "One of the screens of the ClaimGen Portal website",
      websiteLinkUrl: null,
      mediaCaption:
        "As a full-stack developer at AccumTech, I work on fixing bugs and improving features on our website called ClaimGen Portal. It is a place where Business Analysts, Data Operations, and Health Insurance Vendors work with patient insurance claims",
    },
    {
      header: "Technical Doc",
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
      miniMediaUrl: financeImageMini,
      mediaUrl: financeImage,
      mediaAltText: "Home screen of my finance side project",
      websiteLinkUrl: null,
      mediaCaption:
        "Finance Viewer is a side project I have been working on beginning in April 2024. As the name implies, my goal is create a place where users can view all their finances in one location",
    },
  ];

  useEffect(() => {
    return progressiveBackgroundImageLoader(codingPageRef.current, codingImage);
  }, []);

  useEffect(() => {
    if (props.windowHeightPosition >= 2000) {
      const fadeInHeaderInterval = setTimeout(() => {
        setIsHeadersFadedIn(true);
      }, 100);

      const fadeInCarouselInterval = setTimeout(() => {
        setIsCarouselFadedIn(true);
      }, 600);

      return () => {
        clearTimeout(fadeInHeaderInterval);
        clearTimeout(fadeInCarouselInterval);
      };
    }
  }, [props.windowHeightPosition]);

  const nextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const goToCard = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="Coding-Screen Desktop" ref={codingPageRef}>
      <div className="Coding-Content Horizontal">
        <div
          className={`Coding-Horizontal-Layout ${
            isHeadersFadedIn ? "Fade-In" : ""
          }`}
        >
          <div className="Coding-Info-Section">
            <div className="Coding-Header-Container Desktop Horizontal">
              <div className="Coding-Header-Primary">{header.primary}</div>
              <div className="Coding-Header-Secondary Desktop">
                {header.secondary}
              </div>
            </div>
          </div>

          <div className="Coding-Carousel-Section">
            <div
              className={`Coding-Carousel-Container ${
                isCarouselFadedIn ? "Fade-In" : ""
              }`}
            >
              <div className="Coding-Carousel">
                <div
                  className="Coding-Carousel-Slides"
                  style={{
                    transform: `translateX(-${activeCardIndex * 100}%)`,
                  }}
                >
                  {cards.map((card, index) => (
                    <div key={index} className="Coding-Carousel-Slide">
                      <div className="Coding-Card Carousel">
                        <ProgressiveImage
                          smallSrc={card.miniMediaUrl}
                          largeSrc={card.mediaUrl}
                          alt={card.mediaAltText}
                          className="Coding-Card-Image"
                        />
                        <div className="Coding-Card-Header">{card.header}</div>
                        <div className="Coding-Card-Text">
                          {card.mediaCaption}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="Coding-Carousel-Controls">
                  <button
                    className="Coding-Carousel-Arrow Prev"
                    onClick={prevCard}
                    aria-label="Previous slide"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 6L9 12L15 18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div className="Coding-Carousel-Dots">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        className={`Coding-Carousel-Dot ${
                          index === activeCardIndex ? "Active" : ""
                        }`}
                        onClick={() => goToCard(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="Coding-Carousel-Arrow Next"
                    onClick={nextCard}
                    aria-label="Next slide"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
