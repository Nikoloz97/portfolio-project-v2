import React, { useState, useEffect } from "react";
import { Header, Grid, Image } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import VerticalCarousel from "../../Utils/VerticalCarousel/VerticalCarousel";
import VerticalCarouselButtons from "../../Utils/VerticalCarousel/VerticalCarouselButtons";
import "./Welcome.css";

const Welcome = (props) => {
  const { user, setUser, isUserSignedIn, isDesktop } = useUserContext();

  const [displayedWelcomeTextLineOne, setDisplayedWelcomeTextLineOne] =
    useState("");
  const [displayedWelcomeTextLineTwo, setDisplayedWelcomeTextLineTwo] =
    useState("");
  const [isFirstLineComplete, setIsFirstLineComplete] = useState(false);
  const [isSecondLineComplete, setIsSecondLineComplete] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselContent = ["Coding", "Medicine", "Tutoring"];

  useEffect(() => {
    const completeWelcomeTextLineOne = "Welcome,";

    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= completeWelcomeTextLineOne.length) {
        setDisplayedWelcomeTextLineOne(
          completeWelcomeTextLineOne.substring(0, currentIndex)
        );
        currentIndex++;
      } else {
        setIsFirstLineComplete(true);
        clearInterval(typingInterval);
        return;
      }
    }, 120);
  }, []);

  useEffect(() => {
    if (isFirstLineComplete) {
      const completeWelcomeTextLineTwo = `${
        isUserSignedIn ? user.firstName + "." : "Guest."
      }`;

      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= completeWelcomeTextLineTwo.length) {
          setDisplayedWelcomeTextLineTwo(
            completeWelcomeTextLineTwo.substring(0, currentIndex)
          );
          currentIndex++;
        } else {
          setIsSecondLineComplete(true);
          clearInterval(typingInterval);
          return;
        }
      }, 120);
    }
  }, [isFirstLineComplete]);

  return (
    <div className="Welcome-Page">
      {/* TODO: Display loading screen until Image finishes fetching (navbar still overlayed). Then, image fades in, and then welcome text typing begins (test via throttling) */}
      {/* <Loader content="Loading" active={true} /> */}
      <div className="Welcome-Screen">
        <div className="Welcome-Content">
          <div className="Welcome-Text-Position">
            <Header
              className={`Welcome-Text ${isDesktop ? "Desktop" : "Phone"} ${
                props.isSidebarVisible ? "Sidebar-Visible" : ""
              }`}
            >
              {isFirstLineComplete ? (
                <span>{displayedWelcomeTextLineOne}</span>
              ) : (
                <span className="Typewriter-Cursor">
                  {displayedWelcomeTextLineOne}
                </span>
              )}
            </Header>

            <Header
              className={`Welcome-Text ${isDesktop ? "Desktop" : "Phone"} ${
                props.isSidebarVisible ? "Sidebar-Visible" : ""
              }
                    `}
            >
              {isSecondLineComplete ? (
                <span>{displayedWelcomeTextLineTwo}</span>
              ) : (
                <span
                  className={`${
                    isFirstLineComplete ? "Typewriter-Cursor" : ""
                  }`}
                >
                  {displayedWelcomeTextLineTwo}
                </span>
              )}
            </Header>
          </div>

          <div className="Welcome-Vertical-Carousel-Position">
            <VerticalCarousel index={carouselIndex} content={carouselContent} />
          </div>

          <div className="Welcome-Vertical-Carousel-Buttons-Position">
            <VerticalCarouselButtons
              index={carouselIndex}
              setIndex={setCarouselIndex}
              content={carouselContent}
            />
          </div>
        </div>

        <div className="Welcome-Vertical-Carousel-Ticker" />
      </div>

      <div className="Coding-Screen">
        <div className="Coding-Content">Coding Test</div>
      </div>

      <div className="Medicine-Screen">
        <div className="Medicine-Content">Medicine Test</div>
      </div>

      <div className="Tutoring-Screen">
        <div className="Tutoring-Content">Tutoring Test</div>
      </div>
    </div>
  );
};

export default Welcome;
