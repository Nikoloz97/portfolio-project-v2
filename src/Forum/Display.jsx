import { React, useRef } from "react";
import { Image, Button } from "semantic-ui-react";
import "./Forum.css";
import Forum from "./Forum";

function Display() {
  const forumRef = useRef(null);

  const handleJoinForum = () => {
    forumRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <Image
          src={require("../Images/ForumDisplay/Travel5.jpg")}
          style={{ height: "100vh", width: "100%" }}
          centered
        />
        <div className="forum-display-text">Welcome to the Forum</div>
        <div className="forum-display-subtext">Express and Discuss</div>
        <Button onClick={handleJoinForum} className="forum-display-button">
          Join
        </Button>
      </div>

      <div ref={forumRef}>
        <Forum />
      </div>
    </>
  );
}

export default Display;
