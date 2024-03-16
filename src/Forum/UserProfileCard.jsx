import { React, useState, useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";
import { postDateFormatter } from "../Utils/Formatters.js";
import Post from "./Post.jsx";
import "./Forum.css";

const UserProfileCard = (props) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const [isPostLiked, setIsPostLiked] = useState(false);

  const [currentPost, setCurrentPost] = useState(
    props.userProfile.posts[currentPostIndex]
  );

  useEffect(() => {
    setCurrentPost(props.userProfile.posts[currentPostIndex]);
  }, [currentPostIndex]);

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleNextPost = () => {
    const currentIndex = currentPostIndex;
    setCurrentPostIndex(currentIndex + 1);
  };

  const handlePreviousPost = () => {
    const currentIndex = currentPostIndex;
    setCurrentPostIndex(currentIndex - 1);
  };

  return (
    <div className="Forum-Card">
      <div className="Forum-Card-Top-Container">
        <div className="Forum-Card-Image-Header-Container">
          <img
            className="Forum-Card-Image"
            src={props.userProfile.profileURL}
            alt="profile-image"
          />
          <h3 style={{ marginTop: "25px" }}>{props.userProfile.displayName}</h3>
        </div>
        <div className="Forum-Card-Bars-Icon">
          <h5>{postDateFormatter(currentPost.postedDate.toLocaleString())}</h5>
          <Icon size="small" name="bars" />
        </div>
      </div>
      <div className="Post-Buttons-Container">
        <Button
          className="Post-Arrow-Button"
          disabled={currentPostIndex === 0 ? true : false}
          onClick={handlePreviousPost}
        >
          <Icon name="arrow left" />
        </Button>
        <div className="Post-Container">
          <Post
            post={currentPost}
            handlePreviousPost={handlePreviousPost}
            handleNextPost={handleNextPost}
          />
        </div>
        <Button
          className="Post-Arrow-Button"
          disabled={
            currentPostIndex === props.userProfile.posts.length - 1
              ? true
              : false
          }
          onClick={handleNextPost}
        >
          <Icon name="arrow right" />
        </Button>
      </div>
      <div className="Post-Likes-Comments-Container-Container">
        <div className="Post-Likes-Comments-Container">
          <div>
            <Icon
              name={isPostLiked ? "heart" : "heart outline"}
              color={isPostLiked ? "red" : null}
              onClick={handlePostLike}
            />
            {currentPost.likes}
          </div>
          div
          <div>{currentPost.commentCount} Comments</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
