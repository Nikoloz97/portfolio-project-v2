import { React } from "react";
import { Image } from "semantic-ui-react";
import "./Forum.css";

function Display() {
  return (
    <>
      <div>
        <Image
          src={require("../Images/ForumDisplay/Travel5.jpg")}
          className="forum-display-image"
          style={{ height: "40rem" }}
          centered
          fluid
        />
        <div className="forum-display-text">Welcome to the Forum</div>
        <div className="forum-display-subtext">Express and Discuss</div>
      </div>
    </>
  );
}

export default Display;
