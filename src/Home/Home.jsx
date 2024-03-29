import { React } from "react";
import Welcome from "./Welcome/Welcome";
import Coding from "./Coding";
import Medicine from "./Medicine";
import Tutoring from "./Tutoring";

import "./Home.css";

const Home = () => {
  const handleCardClick = (cardIndex) => {
    // Calculate the target position based on the current scroll position
    const currentPosition = window.scrollY;
    const targetPosition =
      currentPosition + (cardIndex + 1) * window.innerHeight;

    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
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
