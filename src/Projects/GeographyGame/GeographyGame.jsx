import React, { useState, useEffect } from "react";
import GeoCard from "./GeoCard";
import Timer from "./Timer";
import WorldMap from "./WorldMap";
import { Grid, Button } from "semantic-ui-react";
import "./Geography.css";
import { apiGeoGameRoot } from "../../Helpers";
import axios from "axios";

const GeographyGame = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [cardsContent, setCardsContent] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [totalQuestions, setTotalQuestions] = useState(10);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const handleIncTotalCorrect = () => {
    setTotalCorrect((value) => value + 1);
  };

  useEffect(() => {
    if (isSessionStarted) {
      axios
        .get(apiGeoGameRoot)
        .then((response) => {
          console.log(response.data);
          setCardsContent(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [isSessionStarted]);

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
            <Button onClick={() => setIsSessionStarted(true)}>Start</Button>

            {cardsContent ? (
              <GeoCard
                content={cardsContent[currentCardIndex]}
                totalQuestions={totalQuestions}
                totalCorrect={totalCorrect}
                setTotalCorrect={setTotalCorrect}
                incTotalCorrect={handleIncTotalCorrect}
                currentCardIndex={currentCardIndex}
                setCurrentCardIndex={setCurrentCardIndex}
              />
            ) : null}
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
