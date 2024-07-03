import React from "react";
import "./Tutoring.css";
import { useUserContext } from "../../UserContext";

import wyzantImage from "../../Images/Home/Tutoring/Content/Wyzant_Square.png";
import websiteImage from "../../Images/Home/Tutoring/Content/Tutoring_Square.png";
import socialMediaImage from "../../Images/Home/Tutoring/Content/TikTok_Square.png";

const Tutoring = (props) => {
  const { isDesktop } = useUserContext();

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
      header: "Personal Tutoring Website",
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

  return (
    <div className={`Tutoring-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Tutoring-Content">
        <div className="Tutoring-Header">Tutoring</div>

        <div className="Tutoring-Cards-Container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`Tutoring-Card ${index % 2 === 0 ? "Even" : "Odd"}`}
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
