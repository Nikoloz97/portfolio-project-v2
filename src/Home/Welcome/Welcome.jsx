import React, { useState, useEffect, useRef } from "react";
import { Header } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import VerticalCarouselDesktop from "../../Utils/VerticalCarousel/VerticalCarouselDesktop";
import VerticalCarouselPhone from "../../Utils/VerticalCarousel/VerticalCarouselPhone";
import VerticalCarouselButtons from "../../Utils/VerticalCarousel/VerticalCarouselButtons";
import welcomeImage from "../../Images/Home/Welcome/Welcome_Georgia_Mountains2.jpg";
import "./Welcome.css";
import { progressiveBackgroundImageLoader } from "../../Utils/ProgressiveLoaders.js";

const Welcome = (props) => {
  const { user, isUserSignedIn, isDesktop, isPhone } = useUserContext();

  const [displayedWelcomeTextLineOne, setDisplayedWelcomeTextLineOne] =
    useState("");
  const [displayedWelcomeTextLineTwo, setDisplayedWelcomeTextLineTwo] =
    useState("");
  const [isFirstLineComplete, setIsFirstLineComplete] = useState(false);
  const [isSecondLineComplete, setIsSecondLineComplete] = useState(false);
  const [isJumpToSectionFadedIn, setIsJumpToSectionFadedIn] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTouchingCarousel, setIsTouchingCarousel] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const [touchMove, setTouchMove] = useState(null);

  const carouselContent = ["Medicine", "Tutoring", "Coding"];

  const welcomeRef = useRef(null);

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

    return progressiveBackgroundImageLoader(welcomeRef.current, welcomeImage);
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

  useEffect(() => {
    if (isSecondLineComplete) {
      const typingInterval = setInterval(() => {
        setIsJumpToSectionFadedIn(true);
        clearInterval(typingInterval);
      }, 400);
    }
  }, [isSecondLineComplete]);

  // Prevent scroll-down of homepage when in vertical carousel container
  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isTouchingCarousel) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: true,
      });
    };
  }, [isTouchingCarousel]);

  return (
    <div className="Welcome-Page">
      <div
        className={`Welcome-Screen ${isDesktop ? "Desktop" : "Phone"}`}
        ref={welcomeRef}
      >
        <div className="Welcome-Screen-Container">
          <div
            className={`Welcome-Text-And-Carousel-Container ${
              isDesktop ? "Desktop" : "Phone"
            }`}
          >
            <div
              className={`Welcome-Text-Container ${
                isDesktop ? "Desktop" : "Phone"
              }`}
            >
              <Header
                style={{ marginBottom: "-20px" }}
                textAlign={isDesktop ? "left" : "center"}
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
                textAlign={isDesktop ? "left" : "center"}
                className={`Welcome-Text ${isDesktop ? "Desktop" : "Phone"} ${
                  props.isSidebarVisible ? "Sidebar-Visible" : ""
                }`}
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
            {/* Vertical carousel */}
            {isDesktop && (
              <div
                className={`Welcome-Begin-Or-VC-Header-Container ${
                  isSecondLineComplete ? "Fade-In" : ""
                }`}
              >
                <button
                  onClick={props.handleDownClick}
                  className="Welcome-Journey-Button"
                >
                  Begin Autobiography Journey
                </button>
                <div style={{ marginRight: "3em" }}>Or</div>
                <div className="Welcome-VC-Header">Jump to Section</div>
                <div className="Welcome-Vertical-Carousel-Buttons-Ticker-Container">
                  <div className="Welcome-Vertical-Carousel-Buttons-Container">
                    <VerticalCarouselButtons
                      index={carouselIndex}
                      setIndex={setCarouselIndex}
                      content={carouselContent}
                    />
                  </div>
                  <div
                    className={`Welcome-Vertical-Carousel-Container ${
                      isDesktop ? "Desktop" : "Phone"
                    }`}
                    onTouchStart={(e) => {
                      setTouchStartY(e.touches[0].clientY);
                      setIsTouchingCarousel(true);
                    }}
                    onTouchEnd={(e) => {
                      setTouchEndY(e.changedTouches[0].clientY);
                      setIsTouchingCarousel(false);
                    }}
                    onTouchMove={(e) => {
                      setTouchMove(e.touches[0].clientY);
                    }}
                  >
                    <VerticalCarouselDesktop
                      carouselIndex={carouselIndex}
                      setCarouselIndex={setCarouselIndex}
                      carouselContent={carouselContent}
                      isTouchingCarousel={isTouchingCarousel}
                      setIsTouchingCarousel={setIsTouchingCarousel}
                      touchStartY={touchStartY}
                      setTouchStartY={setTouchStartY}
                      touchEndY={touchEndY}
                      setTouchEndY={setTouchEndY}
                      touchMove={touchMove}
                      setTouchMove={setTouchMove}
                      content={carouselContent}
                      handleCardClick={props.handleCardClick}
                    />
                  </div>
                  <div className="Welcome-Vertical-Carousel-Ticker" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
