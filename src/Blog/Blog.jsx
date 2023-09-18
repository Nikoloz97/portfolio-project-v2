import React, { useState, useEffect } from "react";
import { Grid, Card, Image, Icon, Button } from "semantic-ui-react";
import "./Blog.css";

const Blog = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [isFirstCardVisible, setFirstCardVisible] = useState(false);
  const [isSecondCardVisible, setSecondCardVisible] = useState(false);
  const [isThirdCardVisible, setThirdCardVisible] = useState(false);

  useEffect(() => {
    // Delay header fade-in
    setTimeout(() => {
      setHeaderVisible(true);
    }, 200);

    // Delay  first card fade-in
    setTimeout(() => {
      setFirstCardVisible(true);
    }, 1200);

    setTimeout(() => {
      setSecondCardVisible(true);
    }, 1500);

    setTimeout(() => {
      setThirdCardVisible(true);
    }, 1800);
  }, []);

  return (
    <div className="Default-Page">
      <header className={`fade-in-header ${isHeaderVisible ? "fade-in" : ""}`}>
        <h1>Nick's Blog</h1>
        <p>Below are links to articles involving travel, health, and dance</p>
      </header>

      <Grid columns={3}>
        {/* First Card */}
        <Grid.Column>
          <Card className={`card ${isFirstCardVisible ? "pop-in" : ""}`}>
            <Image src="/your-image-source.jpg" wrapped />
            <Card.Content>
              <Card.Meta>Date</Card.Meta>
              <Card.Header>Card Header</Card.Header>
              <Card.Description>
                This is a description of the card's content.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="teal">
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Learn More
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        {/* Second Card */}
        <Grid.Column>
          <Card className={`card ${isSecondCardVisible ? "pop-in" : ""}`}>
            <Image src="/your-image-source.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Meta>Date</Card.Meta>
              <Card.Header>Card Header</Card.Header>
              <Card.Description>
                This is a description of the card's content.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="teal">
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Learn More
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        {/* Third Card */}
        <Grid.Column>
          <Card className={`card ${isThirdCardVisible ? "pop-in" : ""}`}>
            <Image src="/your-image-source.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Meta>Date</Card.Meta>
              <Card.Header>Card Header</Card.Header>
              <Card.Description>
                This is a description of the card's content.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="teal">
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Learn More
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Blog;
