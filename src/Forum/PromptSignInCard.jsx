import { React } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import "./Forum.css";

const PromptSignInCard = (props) => {
  return (
    <div className="Forum-Card">
      <div className="Forum-Card-Top-Container">
        <div className="Prompt-Forum-Card-Image-Header-Container">
          <div className="Prompt-Forum-Card-Image">
            <Icon name="user circle" size="large" />
          </div>
          <h3 style={{ marginTop: "25px", marginLeft: "10px" }}>John Smith </h3>
        </div>
        <div className="Forum-Card-Bars-Icon">
          <h5>
            {new Date(Date.now())
              .toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
              .replace(/ /g, "-")
              .replace(/,/g, "")}
          </h5>{" "}
          <Icon size="small" name="bars" />
        </div>
      </div>
      <div className="Post-Buttons-Container">
        <Button className="Post-Arrow-Button" disabled={true}>
          <Icon name="arrow left" />
        </Button>
        <div className="Post-Container"></div>
        <Button className="Post-Arrow-Button" disabled={true}>
          <Icon name="arrow right" />
        </Button>
      </div>
      <div className="Post-Likes-Comments-Container-Container">
        <div className="Post-Likes-Comments-Container">
          <div>
            <Icon name={"heart outline"} color={null} />0 Likes
          </div>
          <div>0 Comments</div>
        </div>
      </div>

      <div className="Sign-In-Prompt">
        <div></div>
      </div>
      <div className="Sign-In-Prompt">
        <div>Log in to post</div>
        <Button content="Login" />
      </div>
    </div>
  );
};

export default PromptSignInCard;
