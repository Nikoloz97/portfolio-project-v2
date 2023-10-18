import React, { useState, useEffect } from "react";
import { Grid, Card, Image, Icon, Button } from "semantic-ui-react";
import "./Blog.css";

const Blog = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isSubheaderVisible, setIsSubheaderVisible] = useState(false);
  const [isFirstCardVisible, setIsFirstCardVisible] = useState(false);
  const [isSecondCardVisible, setIsSecondCardVisible] = useState(false);
  const [isThirdCardVisible, setIsThirdCardVisible] = useState(false);

  useEffect(() => {
    // Delay header fade-in
    setTimeout(() => {
      setIsHeaderVisible(true);
    }, 200);

    // Delay subheader fade-in
    setTimeout(() => {
      setIsSubheaderVisible(true);
    }, 800);

    // Delay  first card fade-in
    setTimeout(() => {
      setIsFirstCardVisible(true);
    }, 2000);

    setTimeout(() => {
      setIsSecondCardVisible(true);
    }, 2200);

    setTimeout(() => {
      setIsThirdCardVisible(true);
    }, 2400);
  }, []);

  return (
    <div className="Default-Page">
      <Grid centered verticalAlign="middle">
        <Grid.Row
          className={`fade-in-header ${isHeaderVisible ? "fade-in" : ""}`}
        >
          <div className="Default-Header">Nick's Blog</div>
        </Grid.Row>
        <Grid.Row
          className={`fade-in-subheader ${isSubheaderVisible ? "fade-in" : ""}`}
        >
          <div className="Default-Subtext">
            Choose from my latest posts in travel, health, and dance
          </div>
        </Grid.Row>
      </Grid>

      <Grid columns={3}>
        {/* First Card */}
        <Grid.Column>
          <Card className={`blog-card ${isFirstCardVisible ? "pop-in" : ""}`}>
            <Image src="/your-image-source.jpg" wrapped />
            <Card.Content>
              <Card.Meta style={{ color: "white" }}>Date</Card.Meta>
              <Card.Header style={{ color: "white" }}>Card Header</Card.Header>
              <Card.Description style={{ color: "white" }}>
                This is a description of the card's content.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button>
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Expand
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        {/* Second Card */}
        <Grid.Column>
          <Card className={`blog-card ${isSecondCardVisible ? "pop-in" : ""}`}>
            <Image src="/your-image-source.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Meta style={{ color: "white" }}>Date</Card.Meta>
              <Card.Header style={{ color: "white" }}>Card Header</Card.Header>
              <Card.Description style={{ color: "white" }}>
                This is a description of the card's content.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button>
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Expand
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>

        {/* Third Card */}
        <Grid.Column>
          <Card className={`blog-card ${isThirdCardVisible ? "pop-in" : ""}`}>
            <Image src="/your-image-source.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Meta style={{ color: "white" }}>Date</Card.Meta>
              <Card.Header style={{ color: "white" }}>Card Header</Card.Header>
              <Card.Description style={{ color: "white" }}>
                This is a description of the card's content.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button>
                <Icon name="arrow right" style={{ marginRight: "10px" }} />
                Expand
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Blog;
