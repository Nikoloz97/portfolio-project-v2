import { React, useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";

function ProfileCards() {
  const [data, setData] = useState([]);
  const [followers, setFollowers] = useState(0);
  const [isUserFollowed, setIsUserFollowed] = useState(false);

  useEffect(() => {
    const getProfileCards = () => {
      axios.get("https://localhost:7047/api/forum").then((response) => {
        setData(response.data);
      });
    };

    getProfileCards();
  }, []);

  const followUser = () => {
    setIsUserFollowed(true);
  };

  const goToProfile = () => {
    setIsUserFollowed(true);
  };

  return (
    <div className="Forum-Page">
      <Card.Group centered itemsPerRow={2}>
        {data.map((user) => (
          <Card className="Forum-Card">
            <Card.Content>
              <Image floated="right" size="mini" src={user.profileURL} />
              <Card.Header style={{ color: "white" }}>
                {user.firstName} {user.lastName}
              </Card.Header>
              <Card.Meta style={{ color: "white" }}>
                {user.age} years old
              </Card.Meta>

              {user.interests.map((interest) => (
                <Card.Description style={{ color: "white" }}>
                  {interest.description}
                </Card.Description>
              ))}
            </Card.Content>

            <Card.Content>
              <Card.Meta style={{ color: "white" }}>Followers: {}</Card.Meta>
              <Card.Meta style={{ color: "white" }}>Total Views: {}</Card.Meta>
              <Card.Meta style={{ color: "white" }}>Total Likes: {}</Card.Meta>
              <Card.Meta style={{ color: "white" }}>Latest Post: {}</Card.Meta>
            </Card.Content>

            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green" onClick={followUser}>
                  Follow
                </Button>
                <Button basic color="blue" onClick={goToProfile}>
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
