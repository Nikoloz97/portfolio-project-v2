import { React, useEffect, useRef, useState } from "react";
import { Image, Button, Loader } from "semantic-ui-react";
import "./Forum.css";
import Forum from "./Forum";

function Display() {
  const forumRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [isDisplayVisible, setIsDisplayVisible] = useState(false);

  const handleJoinForum = () => {
    forumRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setIsDisplayVisible(true);
      }, 200);
    }
  }, [loading]);

  return (
    <>
      <div>
        {/* Default-Page class = allows loading screen to have normal styling */}
        <div className="Default-Page">
          <Image
            src={require("../Images/ForumDisplay/Travel5.jpg")}
            style={{ width: "100%" }}
            centered
            hidden={loading}
            onLoad={() => setLoading(false)}
            className={`fade-in-display ${isDisplayVisible ? "fade-in" : ""}`}
          />
          {loading ? (
            <Loader active content="Loading" />
          ) : (
            <div
              className={`fade-in-display ${isDisplayVisible ? "fade-in" : ""}`}
            >
              <div className="forum-display-text">Welcome to the Forum</div>
              <div className="forum-display-subtext">Express and Discuss</div>
              <Button
                onClick={handleJoinForum}
                className="forum-display-button"
              >
                Join
              </Button>
            </div>
          )}
        </div>

        {loading ? null : (
          <div ref={forumRef}>
            <Forum />
          </div>
        )}
      </div>
    </>
  );
}

export default Display;
