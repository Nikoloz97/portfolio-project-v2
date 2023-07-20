import { React, useState, useEffect } from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import Post from "./Post";

const ProfileCard = (props) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [currentPost, setCurrentPost] = useState(0);

  const handleNextPost = () => {
    const currentIndex = currentPostIndex;
    setCurrentPostIndex(currentIndex + 1);
  };

  const handlePreviousPost = () => {
    const currentIndex = currentPostIndex;
    setCurrentPostIndex(currentIndex - 1);
  };

  return (
    <div>
      <Card className="Forum-Card">
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
          <Card.Meta style={{ color: "white" }}>
            {props.forumProfile.age} years old
          </Card.Meta>
          {props.forumProfile.interests.map((interest) => (
            <Card.Description style={{ color: "white" }}>
              {interest.description}
            </Card.Description>
          ))}
        </Card.Content>
        <Card.Content>
          <Card.Header> Statistics</Card.Header>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column></Grid.Column>
              <Grid.Column>
                <Card.Meta style={{ color: "white" }}>
                  Followers: {props.forumProfile.followerCount}
                </Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <Card.Meta style={{ color: "white" }}>
                  Following: {props.forumProfile.followingCount}
                </Card.Meta>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Card.Meta style={{ color: "white" }}>
                  Total Views: {}
                </Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <Card.Meta style={{ color: "white" }}>
                  Total Likes: {}
                </Card.Meta>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
        {/* TODO: Create slideshow of 3 latest posts */}
        <Card.Content>
          <Card.Header> Latest Posts</Card.Header>
          <Grid>
            <Grid.Row centered style={{ paddingTop: "2rem" }}>
              {props.forumProfile.posts.map((eachPost) => (
                <Post post={eachPost} />
              ))}
            </Grid.Row>
          </Grid>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="green">Follow</Button>
            <Button color="blue">Read More</Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProfileCard;
