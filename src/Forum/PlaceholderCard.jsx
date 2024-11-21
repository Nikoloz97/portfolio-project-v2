import { React } from "react";
import { Button } from "semantic-ui-react";
import "./Forum.css";
import { Link } from "react-router-dom";

const PromptSignInCard = (props) => {
  return (
    <div className="Forum-Card">
      <div className="Post-Likes-Comments-Container-Container"></div>
      {props.isUserSignedIn ? (
        <div className="Placeholder-Overlay">
          <div>No posts yet...</div>
          <Button color="black" content="Create" />
        </div>
      ) : (
        <div className="Placeholder-Overlay">
          <div>Log in to post</div>
          <Button color="black" as={Link} to="/login" content="Login" />
        </div>
      )}
    </div>
  );
};

export default PromptSignInCard;
