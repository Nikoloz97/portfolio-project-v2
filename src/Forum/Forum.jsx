import { React } from "react";
import Display from "./Display";
import ProfileCards from "./ProfileCards";
import { Grid } from "semantic-ui-react";

function Forum() {
  return (
    <div className="Forum-Page">
      <Display />

      <Grid centered style={{ marginTop: "2rem" }}>
        <Grid.Row>
          <ProfileCards />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Forum;
