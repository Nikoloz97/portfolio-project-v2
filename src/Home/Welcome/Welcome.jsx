import React, { useState, useEffect } from "react";
import { Button, Header, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import "./Welcome.css";

const Welcome = (props) => {
  const { user, setUser, setIsUserSignedIn } = useUserContext();

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

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
      }, 500); // Adjust the delay time
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
        <div className="button-container">
          {user === undefined || user === null ? (
            <div className="semi-circle-buttons">
              <Button
                as={Link}
                to="/login"
                className="semi-circle-button"
                style={{ borderRadius: "0 50% 50% 0", height: "20vh" }}
              >
                Log In
              </Button>

              <Button
                as={Link}
                to="/signup"
                className="semi-circle-button"
                style={{ borderRadius: "50% 0 0 50%", height: "20vh" }}
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
      ) : null}
    </div>
  );
};

export default Welcome;
