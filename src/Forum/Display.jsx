import { React, useRef, useState, useEffect } from "react";
import { Image, Button, Loader } from "semantic-ui-react";
import "./Forum.css";
import Forum from "./Forum";

function Display() {
  const forumRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const handleJoinForum = () => {
    forumRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="Default-Page">
          <Image
            src={require("../Images/ForumDisplay/Travel5.jpg")}
            style={{ width: "100%" }}
            centered
            hidden={loading}
            onLoad={() => setLoading(false)}
          />
          {loading ? (
            <Loader active content="Loading" />
          ) : (
            <div>
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
