import { React } from "react";
import { Button, Icon } from "semantic-ui-react";
import { postDateFormatter } from "../Utils/Formatters.js";
import Post from "./Post.jsx";
import "./Forum.css";

const ProfileCard = (props) => {
  // TODO: fix this (backend = just grabs latest post)
  const currentPost = props.forumProfile.posts[0];

  return (
    <div className="Forum-Card">
      <Post post={currentPost} />
      <div className="ReadMore-Container">
        <div className="Read-More-Button-Container">
          <Button color="black" className="Read-More-Button">
            Read Full Post
          </Button>
        </div>
      </div>
      <div className="Forum-Card-ProfileImage-Name-Date-ReadMore-Container">
        <div className="Forum-Card-ProfileImage-Container">
          {props.forumProfile.profileURL ? (
            <img
              className="Forum-Card-Image"
              src={props.forumProfile.profileURL}
              alt="profile card"
            />
          ) : (
            <div className="Forum-Card-Image">
              <Icon
                name="user circle"
                size="big"
                style={{ marginTop: "0.1em" }}
              />
            </div>
          )}
        </div>
        <div className="Forum-Card-Name-Date-Container">
          <p style={{ marginBottom: "0" }}>{props.forumProfile.displayName}</p>
          <p style={{ marginTop: "0" }}>
            {postDateFormatter(currentPost.postedDate.toLocaleString())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
