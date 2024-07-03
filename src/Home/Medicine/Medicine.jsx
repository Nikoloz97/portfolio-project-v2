import React from "react";
import "./Medicine.css";
import { useUserContext } from "../../UserContext";

import plasmaCenterImage from "../../Images/Home/Medicine/Content/Med5.jpg";
import presentationImage from "../../Images/Home/Medicine/Content/Med9.png";
import whiteCoatImage from "../../Images/Home/Medicine/Content/Medicine1.png";

const Medicine = (props) => {
  const { isDesktop } = useUserContext();

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

  return (
    <div className={`Medicine-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
      <div className="Medicine-Content">
        <div className="Medicine-Header">Medicine</div>

        <div className="Medicine-Cards-Container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`Medicine-Card ${index % 2 === 0 ? "Even" : "Odd"}`}
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
