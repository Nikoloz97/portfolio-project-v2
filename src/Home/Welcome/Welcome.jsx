import React, { useState, useEffect } from "react";
import { Button, Header, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import "./Welcome.css";

const Welcome = (props) => {
  const { user, setUser, setIsUserSignedIn } = useUserContext();

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const [isSemiCircleGlowing, setIsSemiCircleGlowing] = useState(false);

  const [showButtons, setShowButtons] = useState(false);

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
        setShowButtons(true);
      }
    }, 100); // Typing speed (100ms per character)
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  // Button fade-in
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 1500);

    if (showButtons) {
      setTimeout(() => {
        props.setIsArrowVisible(true);
        setTimeout(() => {
          setIsSemiCircleGlowing(true);
        }, 200);
      }, 1200);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showButtons]);

  return (
    <div>
      <Grid verticalAlign="middle" centered>
        <Header className="typewriter-animation" style={{ color: "white" }}>
          {isTyping ? (
            <span className="typewriter-animation">{text}</span>
          ) : (
            text
          )}
        </Header>
      </Grid>

      {showButtons ? (
        <div className="semi-circle-button-container">
          {user === undefined || user === null ? (
            <div className="semi-circle-buttons">
              <Button
                as={Link}
                to="/login"
                className={`semi-circle-button left ${
                  isSemiCircleGlowing ? "semi-circle-button-glow" : ""
                }`}
              >
                <div style={{ marginRight: "-1.25rem" }}>Log In</div>
              </Button>

              <Button
                as={Link}
                to="/signup"
                className={`semi-circle-button right ${
                  isSemiCircleGlowing ? "semi-circle-button-glow" : ""
                }`}
              >
                <div style={{ marginLeft: "-1.5rem" }}>Sign Up</div>
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={handleSignOut}>Sign Out</Button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Welcome;
