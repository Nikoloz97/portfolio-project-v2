import React, { useState, useEffect } from "react";
import "./Medicine.css";
import { useUserContext } from "../../UserContext";

import plasmaCenterImage from "../../Images/Home/Medicine/Content/Med5.jpg";
import presentationImage from "../../Images/Home/Medicine/Content/Med9.png";
import whiteCoatImage from "../../Images/Home/Medicine/Content/Medicine1.png";

const Medicine = (props) => {
  const { isDesktop } = useUserContext();

  const [isHeadersFadedIn, setIsHeadersFadeIn] = useState(false);

  const [isCardSetFadedIn, setIsCardSetFadedIn] = useState([
    false,
    false,
    false,
  ]);

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
    if (props.windowHeightPosition >= 900) {
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
      }, 1500);
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

  return (
    <div className={`Medicine-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Medicine-Content">
        <div
          className={`Medicine-Header-Container ${
            isHeadersFadedIn ? "Fade-In" : ""
          }`}
        >
          <div className="Medicine-Header-Primary">{header.primary}</div>
          <div className="Medicine-Header-Secondary">{header.secondary}</div>
        </div>

        <div className="Medicine-Cards-Container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`Medicine-Card ${index % 2 === 0 ? "Even" : "Odd"} ${
                isCardSetFadedIn[index] ? "Fade-In" : ""
              }`}
            >
              <img
                src={card.mediaUrl}
                className="Medicine-Card-Image"
                alt={card.mediaAltText}
              />
              <div className="Medicine-Card-Header">{card.header}</div>
              <div className="Medicine-Card-Text">{card.mediaCaption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicine;
