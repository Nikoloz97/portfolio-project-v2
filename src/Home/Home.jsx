import { React, useState, useRef } from "react";
import { Icon } from "semantic-ui-react";
import Welcome from "./Welcome/Welcome";
import AboutMe from "./AboutMe/AboutMe";
import "./Home.css";

const Home = (props) => {
  const aboutMeRef = useRef(null);

  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isArrowUnhovered, setIsArrowUnhovered] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isArrowAbove, setIsArrowAbove] = useState(false);

  const handleScrollDown = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    setIsArrowHovered(true);
    setIsArrowUnhovered(false);
  };

  const handleMouseLeave = () => {
    setIsArrowHovered(false);
    setIsArrowUnhovered(true);
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
      <div className="Home-Page">
        <Welcome
          setIsArrowVisible={setIsArrowVisible}
          isSidebarVisible={props.isSidebarVisible}
        />

        {/* Arrow stuff */}
        <div
          className={`arrow-container
            ${isArrowVisible ? "Fade-in" : ""}
            ${isArrowAbove ? "above" : "below"} 
            ${isArrowHovered ? "hovered-arrow" : ""} 
            ${isArrowUnhovered ? "Unhovered-arrow" : ""}
            `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon
            name={`${isArrowAbove ? "arrow up" : "arrow down"}`}
            size="small"
            onClick={handleArrowClick}
          />
        </div>
      </div>

      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
