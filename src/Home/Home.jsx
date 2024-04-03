import { React } from "react";
import Welcome from "./Welcome/Welcome";
import Coding from "./Coding";
import Medicine from "./Medicine";
import Tutoring from "./Tutoring";

import "./Home.css";

const Home = () => {
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
    // Calculate the target position based on the current scroll position
    const currentPosition = window.scrollY;
    const targetPosition =
      currentPosition + (cardIndex + 1) * window.innerHeight;
    smoothScroll(targetPosition, 2000);
  };

  return (
    <>
      <div className="Home-Page">
        <Welcome handleCardClick={handleCardClick} />
        <Coding />
        <Medicine />
        <Tutoring />
      </div>
    </>
  );
};

export default Home;
