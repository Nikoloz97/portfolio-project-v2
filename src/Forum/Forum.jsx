import { React, useState } from "react";
import ProfileCard from "./ProfileCard";
import { Card, Grid, Button } from "semantic-ui-react";
import "./ForumPage.css";

function Forum(props) {
  const handleReturn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div data-testid="Forum">
      <div className="Forum-Page">
        <Grid centered>
          <Grid.Row style={{ marginTop: "3rem" }}>
            <Card.Group>
              {props.forumProfileData.map((eachForumProfile) => (
                <ProfileCard
                  forumProfile={eachForumProfile}
                  key={eachForumProfile.forumProfileId}
                />
              ))}
            </Card.Group>
          </Grid.Row>
          <Grid.Row>
            <Button onClick={handleReturn}> Back to top</Button>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default Forum;
