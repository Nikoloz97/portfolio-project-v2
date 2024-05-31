import { React, useState } from "react";
import Welcome from "./Welcome/Welcome";
import Coding from "./Coding";
import Medicine from "./Medicine";
import Tutoring from "./Tutoring";

import { useScrollPosition } from "../Utils/General/TrackScrollPosition";

import "./Home.css";

const Home = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const handleScrollEffect = ({ currPos }) => {
    // Check if the user has scrolled back to the top
    setIsTopOfPage(currPos.y === 0);
  };

  // Use the custom hook
  useScrollPosition(handleScrollEffect, [], null, true, 100); // Adjust wait time as needed

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
      // Ease in (accelerate from zero via quadratic function)
      if (te < 1) return (dis / 2) * te * te + sp;
      te--;
      // Ease out (decelerate to zero via quadratic function)
      return (-dis / 2) * (te * (te - 2) - 1) + sp;
    };

    requestAnimationFrame(animation);
  };

  const handleCardClick = (cardIndex) => {
    const currentPosition = window.scrollY;
    const targetPosition =
      currentPosition + (cardIndex + 1) * window.innerHeight;
    smoothScroll(targetPosition, 2000);
  };

  const handleJourneyClick = () => {
    const currentPosition = window.scrollY;
    const targetPosition = currentPosition + window.innerHeight;
    smoothScroll(targetPosition, 2000);
  };

  return (
    <>
      <div className="Home-Page">
        <Welcome
          handleCardClick={handleCardClick}
          handleJourneyClick={handleJourneyClick}
          isTopOfPage={isTopOfPage}
        />
        <Coding />
        <Medicine />
        <Tutoring />
      </div>
    </>
  );
};

export default Home;
