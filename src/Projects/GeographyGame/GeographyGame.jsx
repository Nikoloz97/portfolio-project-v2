import React from "react";
import Card from "./Card";
import Timer from "./Timer";
import WorldMap from "./WorldMap";
import { Grid } from "semantic-ui-react";

const GeographyGame = (props) => {
  return (
    <div className="Default-Page">
      <header>Welcome to the Geography Game</header>
      <Grid centered>
        <Grid.Row columns={2}>
          <Grid.Column>
            <WorldMap />
          </Grid.Column>
          <Grid.Column>
            <Card />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Timer />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default GeographyGame;
