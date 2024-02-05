import { React, useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Post from "./Post.jsx";

const ProfileCard = (props) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    setCurrentPost(props.forumProfile.posts[currentPostIndex]);
  }, [currentPostIndex]);

  const [currentPost, setCurrentPost] = useState(
    props.forumProfile.posts[currentPostIndex]
  );

  const handleNextPost = () => {
    const currentIndex = currentPostIndex;
    setCurrentPostIndex(currentIndex + 1);
  };

  const handlePreviousPost = () => {
    const currentIndex = currentPostIndex;
    setCurrentPostIndex(currentIndex - 1);
  };

  return (
    <Card
      className="Forum-Card"
      style={{ marginRight: "2rem" }}
      data-testid="Profile-Card"
    >
      <Card.Content>
        <Image
          floated="left"
          size="tiny"
          circular
          src={props.forumProfile.profileURL}
        />
        <Card.Header style={{ color: "white" }}>
          {props.forumProfile.displayName}
        </Card.Header>
      </Card.Content>

      <Card.Content>
        <Post
          post={currentPost}
          handlePreviousPost={handlePreviousPost}
          handleNextPost={handleNextPost}
          currentPostIndex={currentPostIndex}
          postsLength={props.forumProfile.posts.length - 1}
        />
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button>Follow</Button>
          <Button>Read More</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ProfileCard;
