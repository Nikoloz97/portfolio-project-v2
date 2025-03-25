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
      <div className="Forum-Card-ProfileImage-Name-Date-ReadMore-Container">
        <div className="Forum-Card-ProfileImage-Name-Container">
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
                  size="huge"
                  style={{ marginTop: "0.1em" }}
                />
              </div>
            )}
          </div>
          <p style={{ marginBottom: "0" }}>{props.forumProfile.displayName}</p>
        </div>
        <p style={{ marginTop: "0" }}>
          {postDateFormatter(currentPost.postedDate.toLocaleString())}
        </p>
      </div>
      <Post post={currentPost} />
    </div>
  );
};

export default ProfileCard;
