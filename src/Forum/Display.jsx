import { React, useEffect, useRef, useState } from "react";
import { Image, Button, Loader } from "semantic-ui-react";
import "./Forum.css";
import Forum from "./Forum";

function Display() {
  const forumRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isDisplayVisible, setIsDisplayVisible] = useState(false);
  const [isRetryingFetch, setIsRetryingFetch] = useState(false);

  const handleScrollDown = () => {
    forumRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsDisplayVisible(true);
      }, 200);
    }
  }, [isLoading]);

  return (
    <>
      <div>
        {/* Display-Page class = allows loading screen to have normal styling */}
        <div className="Display-Page">
          <Loader content="One second..." active={isLoading} />

          <Image
            src={require("../Images/ForumDisplay/Travel5.jpg")}
            centered
            hidden={isLoading}
            className={`fade-in-display ${isDisplayVisible ? "fade-in" : ""}`}
          />
          <div className={isRetryingFetch ? "Hide-Display" : ""}>
            <div
              className={`fade-in-display ${isDisplayVisible ? "fade-in" : ""}`}
            >
              <div className="forum-display-text">Welcome to the Forum</div>
              <div className="forum-display-subtext">Express and Discuss</div>
              <Button
                onClick={handleScrollDown}
                className="forum-display-button"
              >
                Join
              </Button>
            </div>
          </div>

          <div ref={forumRef}>
            <Forum
              setIsLoading={setIsLoading}
              setIsDisplayVisible={setIsDisplayVisible}
              handleScrollDown={handleScrollDown}
              setIsRetryingFetch={setIsRetryingFetch}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
