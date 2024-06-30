import React from "react";
import "./Tutoring.css";
import { useUserContext } from "../../UserContext";

const Tutoring = (props) => {
  const { isDesktop } = useUserContext();

  const cards = [
    {
      header: "Tutorials",
      mediaUrl: "moshImage",
      mediaAltText: "Mosh logo",
      websiteLinkUrl: null,
      mediaCaption:
        "I began my tutoring journey with Mosh's courses on HTML, CSS, Python, and a little bit of Java (until I realized it wasn’t the same thing as JavaScript)",
    },
    {
      header: "Note Taking",
      mediaUrl: "pythonImage",
      mediaAltText: "Google docs Python notes",
      websiteLinkUrl: null,
      mediaCaption:
        "I took thorough notes. In addition to python above, I made notes to an Intro to Programming video by FreeCodeCamp and HTML/CSS by mosh",
    },
    {
      header: "First Website",
      mediaUrl: "georgiaImage",
      mediaAltText: "Website showing my trip in Georgia from 2021",
      websiteLinkUrl: "https://nickgeorgiatrip2021.netlify.app/",
      mediaCaption:
        "Using my HTML & CSS notes, I created my first website with the help of bootstrap. It was my first instance of putting my front-end skills to practice. Click on the image above to see the website",
    },
  ];

  return (
    <div className={`Tutoring-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Tutoring-Content">
        <div className="Tutoring-Header">Tutoring</div>

        <div className="Tutoring-Cards-Container">
          {cards.map((card, index) => (
            <div
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
