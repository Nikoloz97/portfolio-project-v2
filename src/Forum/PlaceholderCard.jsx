import { React } from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Forum.css";
import { Link } from "react-router-dom";

const PromptSignInCard = (props) => {
  return (
    <div className="Forum-Card">
      <div className="Forum-Card-Top-Container">
        <div className="Prompt-Forum-Card-Image-Header-Container">
          <div className="Prompt-Forum-Card-Image">
            <Icon name="user circle" size="large" />
          </div>
          <h3 style={{ marginTop: "25px", marginLeft: "10px" }}>
            {props.isUserSignedIn
              ? props.userProfile.displayName
              : "John Smith"}
          </h3>
        </div>
        <div className="Forum-Card-Bars-Icon">
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
      {props.isUserSignedIn ? (
        <div className="Placeholder-Overlay">
          <div>No posts yet...</div>
          <Button content="Create" />
        </div>
      ) : (
        <div className="Placeholder-Overlay">
          <div>Log in to post</div>
          <Button as={Link} to="/login" content="Login" />
        </div>
      )}
    </div>
  );
};

export default PromptSignInCard;
