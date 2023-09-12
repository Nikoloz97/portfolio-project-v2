import React, { useState, useEffect } from "react";
import { Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";
import "./Home.css";

const Home = () => {
  const { user, setUser, setIsUserSignedIn } = useUserContext();
  const [showButtons, setShowButtons] = useState(false);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const handleSignOut = () => {
    setUser(null);
    setIsUserSignedIn(false);
  };

  // Welcome animation
  useEffect(() => {
    const welcomeText = "Welcome.";

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setText(welcomeText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
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

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <header className="Default-Page">
        <Header className="typewriter-animation" style={{ color: "white" }}>
          {isTyping ? (
            <span className="typewriter-animation">{text}</span>
          ) : (
            text
          )}
        </Header>

        {showButtons ? (
          <div className="button-container">
            {user === undefined || user === null ? (
              <div>
                <Button as={Link} to="/login" className="fade-in-button">
                  Log In
                </Button>
                <Button as={Link} to="/signup" className="fade-in-button">
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
      </header>
    </>
  );
};

export default Home;
