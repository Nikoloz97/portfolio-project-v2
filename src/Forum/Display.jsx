import { React } from "react";
import { Image } from "semantic-ui-react";

function Display() {
  return (
    <>
      <div className="Image=Text-Container">
        <Image
          src={require("../Images/ForumDisplay/Travel5.jpg")}
          className="Image"
          style={{ height: "40rem" }}
          centered
          fluid
        />
        <div className="Text">Welcome to the Forum! Test</div>
        <div className="Subtext">Express and Discuss</div>
      </div>
    </>
  );
}

export default Display;
