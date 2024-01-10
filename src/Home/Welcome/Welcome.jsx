import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { useUserContext } from "../../UserContext";
import VerticalCarousel from "../../Utils/VerticalCarousel/VerticalCarousel";
import VerticalCarouselPhone from "../../Utils/VerticalCarousel/VerticalCarouselPhone";
import VerticalCarouselButtons from "../../Utils/VerticalCarousel/VerticalCarouselButtons";
import "./Welcome.css";

const Welcome = (props) => {
  const { user, isUserSignedIn, isDesktop } = useUserContext();

  const [displayedWelcomeTextLineOne, setDisplayedWelcomeTextLineOne] =
    useState("");
  const [displayedWelcomeTextLineTwo, setDisplayedWelcomeTextLineTwo] =
    useState("");
  const [isFirstLineComplete, setIsFirstLineComplete] = useState(false);
  const [isSecondLineComplete, setIsSecondLineComplete] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselContent = ["Coding", "Medicine", "Tutoring"];
  const [isTouchingCarousel, setIsTouchingCarousel] = useState(false);

  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);
  const [touchMove, setTouchMove] = useState(0);

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
    if (touchStartY > 0 && touchEndY > 0 && touchMove > 0) {
      if (touchStartY > touchEndY) {
        handleSwipeUp();
      } else if (touchStartY < touchEndY) {
        handleSwipeDown();
      }
    }
  }, [touchStartY, touchEndY]);

  // Reset everything once carousel changes
  useEffect(() => {
    if (touchStartY > 0 && touchEndY > 0 && touchMove > 0) {
      setTouchStartY(0);
      setTouchEndY(0);
      setTouchMove(0);
    }
  }, [carouselIndex]);

  const handleSwipeUp = () => {
    const deltaY = touchStartY - touchEndY;
    const sensitivity = 50; // Adjust the sensitivity as needed

    if (deltaY > sensitivity) {
      handleNext();
    }
  };

  const handleSwipeDown = () => {
    const deltaY = touchEndY - touchStartY;
    const sensitivity = 50; // Adjust the sensitivity as needed

    if (deltaY > sensitivity) {
      handlePrev();
    }
  };

  const handleNext = () => {
    if (carouselIndex < carouselContent.length - 1) {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
    }
  };

  const handlePrev = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(
        (prevIndex) =>
          (prevIndex - 1 + carouselContent.length) % carouselContent.length
      );
    }
  };

  // Prevent scroll-down of homepage when in vertical carousel container
  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isTouchingCarousel) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

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
            <div>
              <div
                className={`Welcome-Vertical-Carousel-Container ${
                  isDesktop ? "Desktop" : ""
                }`}
              >
                <VerticalCarousel
                  index={carouselIndex}
                  content={carouselContent}
                />
              </div>

              <div
                className={`Welcome-Vertical-Carousel-Buttons-Position ${
                  isDesktop ? "Desktop" : "Phone"
                }`}
              >
                <VerticalCarouselButtons
                  index={carouselIndex}
                  setIndex={setCarouselIndex}
                  content={carouselContent}
                />
              </div>
              <div
                className={`Welcome-Vertical-Carousel-Ticker ${
                  isDesktop ? "Desktop" : "Phone"
                }
            
            
              `}
              />
            </div>
          ) : (
            <div>
              <div
                className={`Welcome-Vertical-Carousel-Container ${
                  isDesktop ? "Desktop" : ""
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
                  index={carouselIndex}
                  content={carouselContent}
                />
              </div>

              {/* <div
                className={`Welcome-Vertical-Carousel-Buttons-Position ${
                  isDesktop ? "Desktop" : "Phone"
                }`}
              >
                <VerticalCarouselButtons
                  index={carouselIndex}
                  setIndex={setCarouselIndex}
                  content={carouselContent}
                />
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
