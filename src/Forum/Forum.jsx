import { React, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";

function Forum() {
  const [data, setData] = useState([]);
  const getProfileCards = () => {
    axios.get("https://localhost:7047/api/forum").then((response) => {
      setData(response.data);
    });
    console.log(data);
  };

  return (
    <div className="Forum-Page">
      <Button onClick={getProfileCards}>Get Profile Cards</Button>

      <Card.Group>
        {data.map((user) => (
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              <Card.Header>
                {user.firstName} {user.lastName}
              </Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
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
