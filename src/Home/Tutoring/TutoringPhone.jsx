import React, { useState, useEffect, useRef } from "react";
import LazyLoad from "react-lazyload";
import "./Tutoring.css";
import { Icon } from "semantic-ui-react";

import wyzantImage from "../../Images/Home/Tutoring/Content/Wyzant_Square.png";
import websiteImage from "../../Images/Home/Tutoring/Content/Tutoring_Square.png";
import socialMediaImage from "../../Images/Home/Tutoring/Content/TikTok_Square.png";

import lazyLoadBackgroundImage from "../../Utils/LazyLoader";
import tutoringImage from "../../Images/Home/Tutoring/Background/Tutoring9.jpeg";

const Tutoring = (props) => {
  const [isHeadersFadedIn, setIsHeadersFadeIn] = useState(false);

  const [isCardFadedIn, setIsCardFadedIn] = useState(false);

  const [cardIndex, setCardIndex] = useState(0);

  const header = {
    primary: "Tutoring",
    secondary:
      "Between changing career paths from medicine to programming, I worked as a tutor",
  };

  const cards = [
    {
      header: "Wyzant",
      mediaUrl: wyzantImage,
      mediaAltText: "Profile on the tutoring website Wyzant",
      websiteLinkUrl: null,
      mediaCaption:
        "I began my tutoring journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
    },
    {
      header: "Tutoring Site",
      mediaUrl: websiteImage,
      mediaAltText: "Intro screen to my tutoring website called NikoScience",
      websiteLinkUrl: null,
      mediaCaption: "I made a personal website through Wix called NikoScience",
    },
    {
      header: "Social Media Outreach",
      mediaUrl: socialMediaImage,
      mediaAltText: "Website showing my trip in Georgia from 2021",
      websiteLinkUrl: null,
      mediaCaption:
        "As a way for public outreach, I created short form content in various science subjects",
    },
  ];

  const handleLeftClick = () => {
    let decCardIndex = cardIndex;
    --decCardIndex;
    setCardIndex(decCardIndex);
  };

  const handleRightClick = () => {
    let incCardIndex = cardIndex;
    ++incCardIndex;
    setCardIndex(incCardIndex);
  };

  useEffect(() => {
    if (props.windowHeightPosition >= 1300) {
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
        setIsCardFadedIn(true);
        clearInterval(fadeInCardOneInterval);
        return;
      }, 1500);
    }
  }, [isHeadersFadedIn]);

  const tutoringPageRef = useRef(null);

  useEffect(() => {
    return lazyLoadBackgroundImage(tutoringPageRef.current, tutoringImage);
  }, []);

  return (
    <div className="Tutoring-Screen Phone" ref={tutoringPageRef}>
      <div className="Tutoring-Content Phone">
        <div
          className={`Tutoring-Header-Container ${
            isHeadersFadedIn ? "Fade-In" : ""
          } Phone`}
        >
          <div className="Tutoring-Header-Primary-Phone">{header.primary}</div>
          <div className="Tutoring-Header-Secondary Phone">
            {header.secondary}
          </div>
        </div>

        <div
          className={`Tutoring-Card-Buttons-Container-Phone ${
            isCardFadedIn ? "Fade-In" : ""
          }`}
        >
          <div
            className={`Tutoring-PhoneCard-Button ${
              cardIndex === 0 ? "Disabled" : ""
            }`}
            onClick={handleLeftClick}
          >
            <Icon name="angle left" size="huge" />
          </div>
          <div className="Tutoring-Card Phone">
            <LazyLoad
              height={300}
              offset={100}
              once
              placeholder={
                <div className="Tutoring-Card-Image Placeholder"></div>
              }
            >
              <img
                src={cards[cardIndex].mediaUrl}
                className="Tutoring-Card-Image"
                alt={cards[cardIndex].mediaAltText}
              />
            </LazyLoad>
            <div className="Tutoring-Card-Header">
              {cards[cardIndex].header}
            </div>
            <div className="Tutoring-Card-Text Phone">
              {cards[cardIndex].mediaCaption}
            </div>
          </div>
          <div
            className={`Tutoring-PhoneCard-Button ${
              cardIndex === cards.length - 1 ? "Disabled" : ""
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

export default Tutoring;
