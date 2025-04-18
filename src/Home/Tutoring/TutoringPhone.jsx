import React, { useState, useEffect, useRef } from "react";
import "./TutoringPhone.css";
import { Icon } from "semantic-ui-react";

import wyzantImage from "../../Images/Home/Tutoring/Content/Wyzant_Square.png";
import wyzantImageMini from "../../Images/Home/Tutoring/Content/Wyzant_Square-Mini.png";

import websiteImage from "../../Images/Home/Tutoring/Content/Tutoring_Square.png";
import websiteImageMini from "../../Images/Home/Tutoring/Content/Tutoring_Square-Mini.png";

import socialMediaImage from "../../Images/Home/Tutoring/Content/TikTok_Square.png";
import socialMediaImageMini from "../../Images/Home/Tutoring/Content/TikTok_Square-Mini.png";

import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders.js";
import tutoringImage from "../../Images/Home/Tutoring/Background/Tutoring9.jpeg";
import ProgressiveImage from "../../Utils/ProgressiveImage.js";

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
      miniMediaUrl: wyzantImageMini,
      mediaAltText: "Profile on the tutoring website Wyzant",
      websiteLinkUrl: null,
      mediaCaption:
        "Started tutoring on Wyzant in July 2022, earning certifications in Biology, Chemistry, Biochemistry, Genetics, and Physiology.",
    },
    {
      header: "Tutoring Site",
      mediaUrl: websiteImage,
      miniMediaUrl: websiteImageMini,
      mediaAltText: "Intro screen to my tutoring website called NikoScience",
      websiteLinkUrl: null,
      mediaCaption:
        "Created NikoScience, a personal tutoring website through Wix to expand my teaching presence online.",
    },
    {
      header: "Social Media Outreach",
      mediaUrl: socialMediaImage,
      miniMediaUrl: socialMediaImageMini,
      mediaAltText: "Website showing my trip in Georgia from 2021",
      websiteLinkUrl: null,
      mediaCaption:
        "Developed short-form educational content across various science subjects to enhance public engagement and outreach",
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
    return progressiveBackgroundImageLoader(
      tutoringPageRef.current,
      tutoringImage
    );
  }, []);

  return (
    <div className="Tutoring-Screen Phone" ref={tutoringPageRef}>
      <div className="Tutoring-Content Phone">
        <div
          className={`Tutoring-Header-Container-Phone ${
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
            <ProgressiveImage
              smallSrc={cards[cardIndex].miniMediaUrl}
              largeSrc={cards[cardIndex].mediaUrl}
              alt={cards[cardIndex].mediaAltText}
              className="Tutoring-Card-Image"
            />
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
