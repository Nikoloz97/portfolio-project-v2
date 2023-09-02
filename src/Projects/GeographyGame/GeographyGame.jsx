import React, { useState, useEffect } from "react";
import Card from "./Card";
import Timer from "./Timer";
import WorldMap from "./WorldMap";
import { Grid } from "semantic-ui-react";
import "./Geography.css";

const GeographyGame = (props) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="Default-Page" style={{ gap: "10px" }}>
      <div className="GG-Container">
        <div className={`GG-Header ${fadeIn ? "visible" : ""}`}>
          Geography Game
        </div>
      </div>
      <Grid centered style={{ width: "100%", height: "50rem" }}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <WorldMap />
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
