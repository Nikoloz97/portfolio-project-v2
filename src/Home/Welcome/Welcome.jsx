import React, { useState, useEffect } from "react";
import { Header, Icon, Button } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import VerticalCarouselDesktop from "../../Utils/VerticalCarousel/VerticalCarouselDesktop";
import VerticalCarouselPhone from "../../Utils/VerticalCarousel/VerticalCarouselPhone";
import VerticalCarouselButtons from "../../Utils/VerticalCarousel/VerticalCarouselButtons";
import "./Welcome.css";

const Welcome = (props) => {
  const { user, isUserSignedIn, isDesktop, isMonitor, isStrictlyDesktop } =
    useUserContext();

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
      {/* TODO: Display loading screen until Image finishes fetching (navbar still overlayed). Then, image fades in, and then welcome text typing begins (test via throttling) */}
      {/* <Loader content="Loading" active={true} /> */}
      <div className={`Welcome-Screen ${isDesktop ? "Desktop" : "Phone"}`}>
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
            {isDesktop ? (
              <div
                className={`Welcome-VC-Header-Container ${
                  isSecondLineComplete ? "Fade-In" : ""
                }`}
              >
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
            ) : (
              <div
                className={`Welcome-VC-Header-Container-Phone ${
                  isSecondLineComplete ? "Fade-In" : ""
                }`}
              >
                <div className="Welcome-VC-Header-Phone">Jump to Section</div>
                {/* TODO: Make onTouchStart trigger all throughout div (not just Vertical Carousel Phone)*/}
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
                  <VerticalCarouselPhone
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
              </div>
            )}
          </div>
          <div
            onClick={props.handleDownClick}
            className={`Arrow-Welcome-Scroll-Down-Container ${
              isStrictlyDesktop ? "Strictly-Desktop" : ""
            } ${isMonitor ? "Monitor" : ""} ${
              isJumpToSectionFadedIn && props.isTopOfPage
                ? "Fade-In"
                : !props.isTopOfPage
                ? "Fade-Out"
                : ""
            }`}
          >
            <Icon name="arrow down" />
            <div style={{ marginBottom: "15px" }}>Begin Journey</div>
            <Icon name="arrow down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
