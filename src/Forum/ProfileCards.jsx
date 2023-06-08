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
      <Card.Group>
        {data.map((user) => (
          <Card>
            <Card.Content>
              <Image floated="right" size="mini" src={user.profileURL} />
              <Card.Header>
                {user.firstName} {user.lastName}
              </Card.Header>
              <Card.Meta>{user.age} years old</Card.Meta>

              {user.interests.map((interest) => (
                <Card.Description>{interest.description}</Card.Description>
              ))}
            </Card.Content>

            <Card.Content>
              <Card.Meta>Followers: {}</Card.Meta>
              <Card.Meta>Total Views: {}</Card.Meta>
              <Card.Meta>Total Likes: {}</Card.Meta>
              <Card.Meta>Latest Post: {}</Card.Meta>
            </Card.Content>

            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green" onClick={followUser}>
                  Follow
                </Button>
                <Button basi color="blue" onClick={goToProfile}>
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
