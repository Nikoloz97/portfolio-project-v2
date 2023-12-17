import React, { useState, useEffect } from "react";
import { Button, Header } from "semantic-ui-react";
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
      }, 800);
      setTimeout(() => {
        setIsSignupButtonVisible(true);
      }, 1000);
      setTimeout(() => {
        props.setIsArrowVisible(true);
      }, 1200);
    }
  }, [isTyping]);

  return (
    <div>
      <Header
        className={`Welcome-Text ${isDesktop ? "Desktop" : "Phone"} ${
          props.isSidebarVisible ? "Sidebar-Visible" : ""
        }`}
      >
        {isTyping ? (
          <span className="Typewriter-Cursor">{text}</span>
        ) : (
          <span>{text}</span>
        )}
      </Header>
      <div
        className={`Welcome-Container
                        ${isDesktop ? "Desktop" : "Phone"}
                        ${isWelcomeContainerVisible ? "Fade-In" : ""}`}
      >
        {user === undefined || user === null ? (
          <div>
            <Button
              className={`Welcome-Button Welcome-Login
                  ${isDesktop ? "Desktop" : "Phone"}
                  ${isLoginButtonVisible ? "Fade-In" : ""}`}
              as={Link}
              to="/login"
            >
              Log In
            </Button>
            <Button
              className={`Welcome-Button Welcome-Signup
                ${isDesktop ? "Desktop" : "Phone"}
                ${isSignupButtonVisible ? "Fade-In" : ""}`}
              as={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </div>
        )}
      </div>

      {/* <Header className={`Welcome-Text ${isDesktop ? "Desktop" : "Phone"}`}>
        {isTyping ? (
          <span className="Typewriter-Cursor">{text}</span>
        ) : (
          <span>{text}</span>
        )}
      </Header> */}
    </div>
  );
};

export default Welcome;
