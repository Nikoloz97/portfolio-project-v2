import React, { useState, useEffect } from "react";
import { Button, Header, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import "./Welcome.css";

const Welcome = (props) => {
  const { user, setUser, setIsUserSignedIn, isDesktop } = useUserContext();

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const [isSignupButtonVisible, setIsSignupButtonVisible] = useState(false);
  const [isLoginButtonVisible, setIsLoginButtonVisible] = useState(false);

  const [isWelcomeContainerVisible, setIsWelcomeContainerVisible] =
    useState(false);

  const handleSignOut = () => {
    setUser(null);
    setIsUserSignedIn(false);
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
      }
    }, 100); // Typing speed (100ms per character)

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Fade-ins
  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        setIsWelcomeContainerVisible(true);
      }, 200);
      setTimeout(() => {
        setIsLoginButtonVisible(true);
      }, 400);
      setTimeout(() => {
        setIsSignupButtonVisible(true);
      }, 600);
      setTimeout(() => {
        props.setIsArrowVisible(true);
      }, 800);
    }
  }, [isTyping]);

  return (
    <div
      className={`Welcome-Container ${
        isWelcomeContainerVisible ? "Fade-In" : ""
      } `}
    >
      <Grid verticalAlign="middle" centered>
        <Header className="typewriter-animation" style={{ color: "white" }}>
          {isTyping ? (
            <span className="typewriter-animation">{text}</span>
          ) : (
            text
          )}
        </Header>
      </Grid>

      {user === undefined || user === null ? (
        <>
          {isLoginButtonVisible && (
            <Button
              className="Welcome-Button Welcome-Login"
              as={Link}
              to="/login"
            >
              Log In
            </Button>
          )}

          {isSignupButtonVisible && (
            <Button
              className="Welcome-Button Welcome-Signup"
              as={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          )}
        </>
      ) : (
        <div>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
