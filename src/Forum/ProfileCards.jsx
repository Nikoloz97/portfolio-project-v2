import { React, useState, useEffect } from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import { postDateFormatter } from "../Helpers";
import axios from "axios";

function ProfileCards() {
  const [forumProfileData, setForumProfileData] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [isProfileFollowed, setIsProfileFollowed] = useState(false);

  useEffect(() => {
    const getForumProfiles = () => {
      axios.get("https://localhost:7047/api/forum").then((response) => {
        console.log(response.data);
        setForumProfileData(response.data);
      });
    };

    getForumProfiles();
  }, []);

  const followProfile = () => {
    setIsProfileFollowed(true);
  };

  const goToProfile = () => {
    setIsProfileFollowed(true);
  };

  return (
    <div className="Forum-Page">
      <Card.Group centered itemsPerRow={2}>
        {forumProfileData.map((forumProfile) => (
          <Card className="Forum-Card">
            <Card.Content>
              <Image
                floated="left"
                size="small"
                circular
                src={forumProfile.profileURL}
              />
              <Card.Header style={{ color: "white" }}>
                {forumProfile.displayName}
              </Card.Header>
              <Card.Meta style={{ color: "white" }}>
                {forumProfile.age} years old
              </Card.Meta>
              {forumProfile.interests.map((interest) => (
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
                      Followers: {forumProfile.followerCount}
                    </Card.Meta>
                  </Grid.Column>
                  <Grid.Column>
                    <Card.Meta style={{ color: "white" }}>
                      Following: {forumProfile.followingCount}
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

            {/* TODO: Each post should contain: posted date, comments, and like button (that shows number of total likes as well) */}
            {/* TODO: Create slideshow of latest 3 posts */}

            <Card.Content>
              <Card.Header> Latest Posts</Card.Header>
              {forumProfile.posts.map((post) => (
                <Card>
                  <Card.Header style={{}}>{post.title}</Card.Header>
                  <Card.Content>
                    <Grid>
                      <Grid.Row>
                        {postDateFormatter(post.postedDate.toLocaleString())}
                      </Grid.Row>
                      <Grid.Row>{post.text}</Grid.Row>
                    </Grid>
                  </Card.Content>
                  <Card.Content style={{}}>
                    {post.text}
                    <Image
                      style={{ display: "block" }}
                      size="small"
                      src={post.photoURL}
                    />
                  </Card.Content>
                </Card>
              ))}
            </Card.Content>

            <Card.Content extra>
              <div className="ui two buttons">
                <Button color="green" onClick={followProfile}>
                  Follow
                </Button>
                <Button color="blue" onClick={goToProfile}>
                  Read More
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default ProfileCards;
