import { React, useState, useRef } from "react";
import { Icon } from "semantic-ui-react";
import Welcome from "./Welcome/Welcome";
import AboutMe from "./AboutMe/AboutMe";
import "./Home.css";

const Home = () => {
  const aboutMeRef = useRef(null);

  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isArrowDehovered, setIsArrowDehovered] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isArrowAbove, setIsArrowAbove] = useState(false);

  const handleScrollDown = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    setIsArrowHovered(true);
    setIsArrowDehovered(false);
  };

  const handleMouseLeave = () => {
    setIsArrowHovered(false);
    setIsArrowDehovered(true);
  };

  const handleArrowClick = () => {
    setIsArrowVisible(false);

    if (isArrowAbove === false) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
      setIsArrowAbove(true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsArrowAbove(false);
    }

    setTimeout(() => {
      setIsArrowVisible(true);
      setIsArrowHovered(false);
    }, 800);
  };

  return (
    <>
      <div className="Default-Page">
        <Welcome
          handleScrollDown={handleScrollDown}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleArrowClick={handleArrowClick}
          setIsArrowVisible={setIsArrowVisible}
        />

        {/* Arrow stuff */}
        {isArrowVisible ? (
          <div
            className={`${
              isArrowAbove ? "arrow-container-above" : "arrow-container-bottom"
            } ${isArrowHovered ? "hovered-ac" : ""} ${
              isArrowDehovered
                ? "subsequent-ac-opacity"
                : "on-render-ac-opacity"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Icon
              name={`${isArrowAbove ? "arrow up" : "arrow down"}`}
              size="small"
              onClick={handleArrowClick}
            />
          </div>
        ) : null}
      </div>

      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
