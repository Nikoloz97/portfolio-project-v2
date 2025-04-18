import { React, useEffect, useState } from "react";
import { useUserContext } from "../../UserContext";
import { Icon } from "semantic-ui-react";
import Welcome from "../Welcome/Welcome";
import Coding from "../Coding/Coding";
import CodingPhone from "../Coding/CodingPhone";
import Medicine from "../Medicine/Medicine";
import MedicinePhone from "../Medicine/MedicinePhone";
import Tutoring from "../Tutoring/Tutoring";
import TutoringPhone from "../Tutoring/TutoringPhone";

import { useScrollPosition } from "../../Utils/General/TrackScrollPosition";

import "./Home.css";

const Home = () => {
  const { isDesktop } = useUserContext();

  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [windowHeightPosition, setWindowHeightPosition] = useState(
    window.scrollY
  );
  const [isHomeArrowsVisible, setIsHomeArrowsVisible] = useState(false);
  const [isBottomArrowVisible, setIsBottomArrowVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeightPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      windowHeightPosition > 100 &&
      (windowHeightPosition % window.innerHeight < 100 ||
        windowHeightPosition % window.innerHeight > window.innerHeight - 100)
    ) {
      setIsHomeArrowsVisible(true);
    } else {
      setIsHomeArrowsVisible(false);
    }
    if (windowHeightPosition > 2000) setIsBottomArrowVisible(false);
    else {
      setIsBottomArrowVisible(true);
    }
  }, [windowHeightPosition]);

  const handleScrollEffect = ({ currPos }) => {
    setIsTopOfPage(currPos.y === 0); // Check if the user has scrolled back to the top
  };

  useScrollPosition(handleScrollEffect, [], null, true, 100);

  const smoothScroll = (target, duration) => {
    var targetPosition = target;
    var startPosition = window.scrollY;
    var distance = targetPosition - startPosition;
    var startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Creates the gradual speed up -> slow down effect
    const ease = (te, sp, dis, dur) => {
      te /= dur / 2;
      if (te < 1) return (dis / 2) * te * te + sp; // Ease in (accelerate)
      te--;
      return (-dis / 2) * (te * (te - 2) - 1) + sp; // Ease out (decelerate)
    };

    requestAnimationFrame(animation);
  };

  const handleCardClick = (cardIndex) => {
    const currentPosition = window.scrollY;
    const targetPosition =
      currentPosition + (cardIndex + 1) * window.innerHeight;
    smoothScroll(targetPosition, 2000);
  };

  const handleUpClick = () => {
    const currentPosition = window.scrollY;
    const targetPosition = currentPosition - window.innerHeight;
    smoothScroll(targetPosition, 2000);
  };

  const handleDownClick = () => {
    const currentPosition = window.scrollY;
    const targetPosition = currentPosition + window.innerHeight;
    smoothScroll(targetPosition, 2000);
  };

  return (
    <>
      <div className="Home-Page">
        {isHomeArrowsVisible && isDesktop && (
          <div>
            <div onClick={handleUpClick} className="Home-Angle-Up">
              <Icon name="angle up" />
            </div>
            {isBottomArrowVisible && (
              <div onClick={handleDownClick} className="Home-Angle-Down">
                <Icon name="angle down" />
              </div>
            )}
          </div>
        )}
        <Welcome
          handleCardClick={handleCardClick}
          handleDownClick={handleDownClick}
          isTopOfPage={isTopOfPage}
        />
        {isDesktop ? (
          <>
            <Medicine windowHeightPosition={windowHeightPosition} />
            <Tutoring windowHeightPosition={windowHeightPosition} />
            <Coding windowHeightPosition={windowHeightPosition} />
          </>
        ) : (
          <>
            <MedicinePhone windowHeightPosition={windowHeightPosition} />
            <TutoringPhone windowHeightPosition={windowHeightPosition} />
            <CodingPhone windowHeightPosition={windowHeightPosition} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
