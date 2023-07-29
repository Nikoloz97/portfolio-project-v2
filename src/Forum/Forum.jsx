import { React, useState, useEffect } from "react";
import Display from "./Display";
import ProfileCard from "./ProfileCard";
import { Card, Grid } from "semantic-ui-react";
import axios from "axios";

function Forum() {
  const [forumProfileData, setForumProfileData] = useState([]);

  const apiForumRoot = "https://localhost:7047/api/forum";

  useEffect(() => {
    const getForumProfiles = () => {
      axios.get(apiForumRoot).then((response) => {
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
          <Card.Group>
            {forumProfileData.map((eachForumProfile) => (
              <div>
                <ProfileCard
                  forumProfile={eachForumProfile}
                  key={eachForumProfile.forumProfileId}
                />
              </div>
            ))}
          </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Forum;
