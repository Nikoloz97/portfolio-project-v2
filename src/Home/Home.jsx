import { React } from "react";
import Welcome from "./Welcome/Welcome";
import Coding from "./Coding";
import Medicine from "./Medicine";
import Tutoring from "./Tutoring";

import "./Home.css";

const Home = () => {
  // TODO: understand how this function works
  const smoothScroll = (target, duration) => {
    var targetPosition = target;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleCardClick = (cardIndex) => {
    // Calculate the target position based on the current scroll position
    const currentPosition = window.scrollY;
    const targetPosition =
      currentPosition + (cardIndex + 1) * window.innerHeight;

    // // Scroll smoothly to the target position
    // window.scrollTo({
    //   top: targetPosition,
    //   behavior: "smooth",
    // });
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
