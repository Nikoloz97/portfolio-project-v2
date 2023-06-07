import { React, useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";

function Forum() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProfileCards();
  }, []);

  const getProfileCards = () => {
    axios.get("https://localhost:7047/api/forum").then((response) => {
      setData(response.data);
    });
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

            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default Forum;
