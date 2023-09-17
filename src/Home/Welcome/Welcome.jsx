import React, { useState, useEffect, useRef } from "react";
import { Button, Header, Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import AboutMe from "../AboutMe/AboutMe";
import "./Welcome.css";

const Welcome = () => {
  const { user, setUser, setIsUserSignedIn } = useUserContext();

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const [showButtons, setShowButtons] = useState(false);

  const [isArrowHovered, setIsArrowHovered] = useState(false);
  const [isArrowDehovered, setIsArrowDehovered] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  const handleSignOut = () => {
    setUser(null);
    setIsUserSignedIn(false);
  };

  const handleMouseEnter = () => {
    setIsArrowHovered(true);
    setIsArrowDehovered(false);
  };

  const handleMouseLeave = () => {
    setIsArrowHovered(false);
    setIsArrowDehovered(true);
  };

  // Scroll downscreen
  const aboutMeRef = useRef(null);
  const handleArrowClick = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Welcome typewriting animation
  useEffect(() => {
    const welcomeText = "Welcome.";

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setText(welcomeText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        setShowButtons(true);
      }
    }, 100); // Typing speed (100ms per character)
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Button animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1500);

    if (showButtons) {
      setTimeout(() => {
        setIsArrowVisible(true);
      }, 500); // Adjust the delay time
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showButtons]);

  return (
    <>
      <header className="Default-Page">
        <div className="welcome-buttons-container">
          <Grid verticalAlign="middle" centered>
            <Grid.Row>
              <Header
                className="typewriter-animation"
                style={{ color: "white" }}
              >
                {isTyping ? (
                  <span className="typewriter-animation">{text}</span>
                ) : (
                  text
                )}
              </Header>
            </Grid.Row>
            <Grid.Row>
              {showButtons ? (
                <div className="button-container">
                  {user === undefined || user === null ? (
                    <div>
                      <Button as={Link} to="/login">
                        Log In
                      </Button>
                      <Button as={Link} to="/signup">
                        Sign Up
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button onClick={handleSignOut}>Sign Out</Button>
                    </div>
                  )}
                </div>
              ) : null}
            </Grid.Row>

            {isArrowVisible ? (
              <Grid.Row>
                <div
                  className={`arrow-container ${
                    isArrowHovered ? "hovered-ac" : ""
                  } ${
                    isArrowDehovered
                      ? "subsequent-ac-opacity"
                      : "on-render-ac-opacity"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Icon
                    name="arrow down"
                    size="small"
                    className={`arrow-icon ${
                      isArrowHovered ? "arrow-grow" : ""
                    }`}
                    onClick={handleArrowClick}
                  />
                </div>
              </Grid.Row>
            ) : null}
          </Grid>
        </div>
      </header>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
    </>
  );
};

export default Welcome;
