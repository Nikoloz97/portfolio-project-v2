import React, { useState, useEffect, useRef } from "react";
import "./Tutoring.css";

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
  const [isHeadersFadedIn, setIsHeadersFadedIn] = useState(false);
  const [isCarouselFadedIn, setIsCarouselFadedIn] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const tutoringPageRef = useRef(null);

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
        "I began my tutoring journey through a platform called Wyzant. Since making a profile in July 2022, I'm certified in Biology, Chemistry, Biochemistry, Genetics, and Physiology",
    },
    {
      header: "Tutoring Site",
      mediaUrl: websiteImage,
      miniMediaUrl: websiteImageMini,
      mediaAltText: "Intro screen to my tutoring website called NikoScience",
      websiteLinkUrl: null,
      mediaCaption: "I made a personal website through Wix called NikoScience",
    },
    {
      header: "Social Media Outreach",
      mediaUrl: socialMediaImage,
      miniMediaUrl: socialMediaImageMini,
      mediaAltText: "Website showing my trip in Georgia from 2021",
      websiteLinkUrl: null,
      mediaCaption:
        "As a way for public outreach, I created short form content in various science subjects",
    },
  ];

  useEffect(() => {
    return progressiveBackgroundImageLoader(
      tutoringPageRef.current,
      tutoringImage
    );
  }, []);

  useEffect(() => {
    if (props.windowHeightPosition >= 1200) {
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
    <div className="Tutoring-Screen Desktop" ref={tutoringPageRef}>
      <div className="Tutoring-Content Horizontal">
        <div
          className={`Tutoring-Horizontal-Layout ${
            isHeadersFadedIn ? "Fade-In" : ""
          }`}
        >
          <div className="Tutoring-Info-Section">
            <div className="Tutoring-Header-Container Desktop Horizontal">
              <div className="Tutoring-Header-Primary">{header.primary}</div>
              <div className="Tutoring-Header-Secondary Desktop">
                {header.secondary}
              </div>
            </div>
          </div>

          <div className="Tutoring-Carousel-Section">
            <div
              className={`Tutoring-Carousel-Container ${
                isCarouselFadedIn ? "Fade-In" : ""
              }`}
            >
              <div className="Tutoring-Carousel">
                <div
                  className="Tutoring-Carousel-Slides"
                  style={{
                    transform: `translateX(-${activeCardIndex * 100}%)`,
                  }}
                >
                  {cards.map((card, index) => (
                    <div key={index} className="Tutoring-Carousel-Slide">
                      <div className="Tutoring-Card Carousel">
                        <ProgressiveImage
                          smallSrc={card.miniMediaUrl}
                          largeSrc={card.mediaUrl}
                          alt={card.mediaAltText}
                          className="Tutoring-Card-Image"
                        />
                        <div className="Tutoring-Card-Header">
                          {card.header}
                        </div>
                        <div className="Tutoring-Card-Text">
                          {card.mediaCaption}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="Tutoring-Carousel-Controls">
                  <button
                    className="Tutoring-Carousel-Arrow Prev"
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

                  <div className="Tutoring-Carousel-Dots">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        className={`Tutoring-Carousel-Dot ${
                          index === activeCardIndex ? "Active" : ""
                        }`}
                        onClick={() => goToCard(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="Tutoring-Carousel-Arrow Next"
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

export default Tutoring;
