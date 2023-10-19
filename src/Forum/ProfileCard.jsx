import { React, useState, useEffect } from "react";
import { Button, Card, Image, Grid, Icon } from "semantic-ui-react";
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
    <Card className="Forum-Card" style={{ marginRight: "2rem" }}>
      <Card.Content>
        <Image
          floated="left"
          size="small"
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
          <Button color="green">Follow</Button>
          <Button color="blue">Read More</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ProfileCard;
