import { React, useState, useEffect } from "react";
import Display from "./Display";
import ProfileCard from "./ProfileCard";
import { Card, Grid } from "semantic-ui-react";
import axios from "axios";

function Forum() {
  const [forumProfileData, setForumProfileData] = useState([]);

  useEffect(() => {
    const getForumProfiles = () => {
      axios.get("https://localhost:7047/api/forum").then((response) => {
        console.log(response.data);
        setForumProfileData(response.data);
      });
    };

    getForumProfiles();
  }, []);

  return (
    <div className="Forum-Page">
      <Display />

      <Grid centered style={{ marginTop: "2rem" }}>
        <Grid.Row>
          <div className="Forum-Page">
            <Card.Group centered itemsPerRow={2}>
              {forumProfileData.map((eachForumProfile) => (
                <ProfileCard forumProfile={eachForumProfile} />
              ))}
            </Card.Group>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Forum;
