import React, { useState, useEffect, useRef } from "react";
import "./Medicine.css";

import plasmaCenterImage from "../../Images/Home/Medicine/Content/Med5.jpg";
import plasmaCenterImageMini from "../../Images/Home/Medicine/Content/Med5-Mini.jpg";
import presentationImage from "../../Images/Home/Medicine/Content/Med9.png";
import presentationImageMini from "../../Images/Home/Medicine/Content/Med9-Mini.png";
import whiteCoatImage from "../../Images/Home/Medicine/Content/Medicine1.png";
import whiteCoatImageMini from "../../Images/Home/Medicine/Content/Medicine1-Mini.png";

import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders.js";
import medicineImage from "../../Images/Home/Medicine/Background/Medicine26.jpeg";
import ProgressiveImage from "../../Utils/ProgressiveImage.js";

const Medicine = (props) => {
  const [isHeaderFadedIn, setIsHeaderFadedIn] = useState(false);
  const [isCarouselFadedIn, setIsCarouselFadedIn] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const medicinePageRef = useRef(null);

  const header = {
    primary: "Medicine",
    secondary:
      "Throughout my undergraduate degree up until the first year of medical school, I was pursuing a career as a physician",
  };

  const cards = [
    {
      header: "Plasma Center",
      miniMediaUrl: plasmaCenterImageMini,
      mediaUrl: plasmaCenterImage,
      mediaAltText: "Plasma Center",
      mediaCaption:
        "Served at a plasma donation center during my freshman year of undergraduate studies",
    },
    {
      header: "Research",
      miniMediaUrl: presentationImageMini,
      mediaUrl: presentationImage,
      mediaAltText: "My research presentation in the sociology department",
      mediaCaption:
        "Conducted research in biochemistry and sociology labs, interviewing formerly incarcerated individuals about health outcomes",
    },
    {
      header: "Medical School",
      miniMediaUrl: whiteCoatImageMini,
      mediaUrl: whiteCoatImage,
      mediaAltText: "In my white coat on campus at Ohio University",
      mediaCaption:
        "Attended Ohio University Heritage College of Osteopathic Medicine (OUHCOM) for one year",
    },
  ];

  useEffect(() => {
    return progressiveBackgroundImageLoader(
      medicinePageRef.current,
      medicineImage
    );
  }, []);

  useEffect(() => {
    if (props.windowHeightPosition >= 600) {
      const fadeInHeaderInterval = setTimeout(() => {
        setIsHeaderFadedIn(true);
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
    <div className="Medicine-Screen Desktop" ref={medicinePageRef}>
      <div className="Medicine-Content Horizontal">
        <div
          className={`Medicine-Horizontal-Layout ${
            isHeaderFadedIn ? "Fade-In" : ""
          }`}
        >
          <div className="Medicine-Info-Section">
            <div className="Medicine-Header-Container Desktop Horizontal">
              <div className="Medicine-Header-Primary">{header.primary}</div>
              <div className="Medicine-Header-Secondary Desktop">
                {header.secondary}
              </div>
            </div>
          </div>

          <div className="Medicine-Carousel-Section">
            <div
              className={`Medicine-Carousel-Container ${
                isCarouselFadedIn ? "Fade-In" : ""
              }`}
            >
              <div className="Medicine-Carousel">
                <div
                  className="Medicine-Carousel-Slides"
                  style={{
                    transform: `translateX(-${activeCardIndex * 100}%)`,
                  }}
                >
                  {cards.map((card, index) => (
                    <div key={index} className="Medicine-Carousel-Slide">
                      <div className="Medicine-Card Carousel">
                        <ProgressiveImage
                          smallSrc={card.miniMediaUrl}
                          largeSrc={card.mediaUrl}
                          alt={card.mediaAltText}
                          className="Medicine-Card-Image"
                        />
                        <div className="Medicine-Card-Header">
                          {card.header}
                        </div>
                        <div className="Medicine-Card-Text">
                          {card.mediaCaption}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="Medicine-Carousel-Controls">
                  <button
                    className="Medicine-Carousel-Arrow Prev"
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

                  <div className="Medicine-Carousel-Dots">
                    {cards.map((_, index) => (
                      <button
                        key={index}
                        className={`Medicine-Carousel-Dot ${
                          index === activeCardIndex ? "Active" : ""
                        }`}
                        onClick={() => goToCard(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="Medicine-Carousel-Arrow Next"
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

export default Medicine;
