import React, { useState, useEffect, useRef } from "react";
import "./Medicine.css";
import { Icon } from "semantic-ui-react";
import LazyLoad from "react-lazyload";

import plasmaCenterImage from "../../Images/Home/Medicine/Content/Med5.jpg";
import presentationImage from "../../Images/Home/Medicine/Content/Med9.png";
import whiteCoatImage from "../../Images/Home/Medicine/Content/Medicine1.png";

import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders.js";
import medicineImage from "../../Images/Home/Medicine/Background/Medicine26.jpeg";

const Medicine = (props) => {
  const [isHeadersFadedIn, setIsHeadersFadeIn] = useState(false);

  const [isCardFadedIn, setIsCardFadedIn] = useState(false);

  const [cardIndex, setCardIndex] = useState(0);

  const header = {
    primary: "Medicine",
    secondary:
      "Throughout my undergraduate degree up until the first year of medical school, I was pursuing a career as a physician",
  };

  const cards = [
    {
      header: "Plasma Center",
      mediaUrl: plasmaCenterImage,
      mediaAltText: "Plasma Center",
      mediaCaption:
        "I worked at a plasma center during my first year of undergrad",
    },
    {
      header: "Research",
      mediaUrl: presentationImage,
      mediaAltText: "My research presentation in the sociology department",
      mediaCaption:
        "Throughout my undergrad, I volunteered at various research labs in biochemistry and sociology. For sociology, I interviewed post-incarcerated individuals on their health status",
    },
    {
      header: "Medical School",
      mediaUrl: whiteCoatImage,
      mediaAltText: "In my white coat on campus at Ohio University",
      mediaCaption:
        "I went to medical school for a year at Ohio University Heritage College of Osteopathic Medicine (OUHCOM)",
    },
  ];

  useEffect(() => {
    if (props.windowHeightPosition >= 600) {
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
    let decCardIndex = cardIndex;
    --decCardIndex;
    setCardIndex(decCardIndex);
  };

  const handleRightClick = () => {
    let incCardIndex = cardIndex;
    ++incCardIndex;
    setCardIndex(incCardIndex);
  };

  const medicinePageRef = useRef(null);

  useEffect(() => {
    return progressiveBackgroundImageLoader(
      medicinePageRef.current,
      medicineImage
    );
  }, []);

  return (
    <div className="Medicine-Screen Phone" ref={medicinePageRef}>
      <div className="Medicine-Content Phone">
        <div
          className={`Medicine-Header-Container ${
            isHeadersFadedIn ? "Fade-In" : ""
          } Phone`}
        >
          <div className="Medicine-Header-Primary">{header.primary}</div>
          <div className="Medicine-Header-Secondary Phone">
            {header.secondary}
          </div>
        </div>

        <div
          className={`Medicine-Card-Buttons-Container-Phone ${
            isCardFadedIn ? "Fade-In" : ""
          }`}
        >
          <div
            className={`Medicine-PhoneCard-Button ${
              cardIndex === 0 ? "Disabled" : ""
            }`}
            onClick={handleLeftClick}
          >
            <Icon name="angle left" size="huge" />
          </div>
          <div className="Medicine-Card Phone">
            <LazyLoad
              height={300}
              offset={100}
              once
              placeholder={
                <div className="Medicine-Card-Image Placeholder"></div>
              }
            >
              <img
                src={cards[cardIndex].mediaUrl}
                className="Medicine-Card-Image"
                alt={cards[cardIndex].mediaAltText}
              />
            </LazyLoad>
            <div className="Medicine-Card-Header">
              {cards[cardIndex].header}
            </div>
            <div className="Medicine-Card-Text">
              {cards[cardIndex].mediaCaption}
            </div>
          </div>
          <div
            className={`Medicine-PhoneCard-Button ${
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

export default Medicine;
