import React, { useState, useEffect, useRef } from "react";
import "./Tutoring.css";

import wyzantImage from "../../Images/Home/Tutoring/Content/Wyzant_Square.png";
import websiteImage from "../../Images/Home/Tutoring/Content/Tutoring_Square.png";
import socialMediaImage from "../../Images/Home/Tutoring/Content/TikTok_Square.png";

import lazyLoadBackgroundImage from "../../Utils/LazyLoader";
import tutoringImage from "../../Images/Home/Tutoring/Background/Tutoring9.jpeg";

const Tutoring = (props) => {
  const header = {
    primary: "Tutoring",
    secondary:
      "Between changing career paths from medicine to programming, I worked as a tutor",
  };

  const [isHeadersFadedIn, setIsHeadersFadeIn] = useState(false);

  const [isCardSetFadedIn, setIsCardSetFadedIn] = useState([
    false,
    false,
    false,
  ]);

  const cards = [
    {
      header: "Wyzant",
      mediaUrl: wyzantImage,
      mediaAltText: "Profile on the tutoring website Wyzant",
      websiteLinkUrl: null,
      mediaCaption:
        "I began my tutoring journey through a platform called Wyzant. Since making a profile in July 2022, I'm certified in Biology, Chemistry, Biochemistry, Genetics, and Physiology",
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

  useEffect(() => {
    if (props.windowHeightPosition >= 1600) {
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

  const tutoringPageRef = useRef(null);

  useEffect(() => {
    return lazyLoadBackgroundImage(tutoringPageRef.current, tutoringImage);
  }, []);

  return (
    <div className="Tutoring-Screen Desktop" ref={tutoringPageRef}>
      <div className="Tutoring-Content">
        <div
          className={`Tutoring-Header-Container ${
            isHeadersFadedIn ? "Fade-In" : ""
          }`}
        >
          <div className="Tutoring-Header-Primary">{header.primary}</div>
          <div className="Tutoring-Header-Secondary Desktop">
            {header.secondary}
          </div>
        </div>

        <div className="Tutoring-Cards-Container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`Tutoring-Card ${index % 2 === 0 ? "Even" : "Odd"} ${
                isCardSetFadedIn[index] ? "Fade-In" : ""
              }`}
            >
              <img
                src={card.mediaUrl}
                className="Tutoring-Card-Image"
                alt={card.mediaAltText}
              />
              <div className="Tutoring-Card-Header">{card.header}</div>
              <div className="Tutoring-Card-Text">{card.mediaCaption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutoring;
