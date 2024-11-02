import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "semantic-ui-react";
import axios from "axios";

import PlayerDisplay from "./PlayerDisplay";
import PlayerCard from "./PlayerCard";
import ResultsModal from "./ResultsModal";
import {
  selectedPlayersArray,
  populateCurrentPlayer,
} from "../../../Utils/Projects/FantasyBball/TeamAnalyzer";
import "./TeamAnalyzer.css";

function TeamAnalyzer() {
  const [selectedPlayers, setSelectedPlayers] = useState(selectedPlayersArray);

  const [playerIndex, setPlayerIndex] = useState(0);

  const [playerNameInput, setPlayerNameInput] = useState("");

  const [playerOptions, setPlayerOptions] = useState([]);

  const [hasPlayerChoosingBegun, setHasPlayerChoosingBegun] = useState(false);

  const [isPlayersCollectionFilled, setIsPlayersCollectionFilled] =
    useState(false);

  useEffect(() => {
    const isEveryPlayerChosen = selectedPlayers.every(
      (player) => player.isPlayerChosen
    );

    setIsPlayersCollectionFilled(isEveryPlayerChosen);
  }, [selectedPlayers]);

  useEffect(() => {
    const fetchPlayerOptions = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerList",
          headers: {
            "X-RapidAPI-Key":
              "2a68275cbamsha4332cacc57200cp19e3b9jsn35ead262c58d",
            "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
          },
        });
        setPlayerOptions(
          response.data.body.map((playerObj) => playerObj.longName)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlayerOptions();
  }, []);

  useEffect(() => {
    const fetchSelectedPlayer = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerInfo",
          params: {
            playerName: playerNameInput,
            statsToGet: "averages",
          },
          headers: {
            "X-RapidAPI-Key":
              "2a68275cbamsha4332cacc57200cp19e3b9jsn35ead262c58d",
            "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
          },
        });

        const updatedSelectedPlayers = [...selectedPlayers];

        const currentPlayer = updatedSelectedPlayers[playerIndex];

        const fetchedData = response.data.body[0];

        // console.log(fetchedData);

        populateCurrentPlayer(
          updatedSelectedPlayers,
          currentPlayer,
          fetchedData,
          playerIndex,
          setSelectedPlayers
        );
      } catch (error) {
        console.error(error);
      }
    };

    if (playerNameInput !== "") {
      fetchSelectedPlayer();
    }
  }, [playerNameInput]);

  return (
    <div className="Default-Page">
      {!hasPlayerChoosingBegun && (
        <div className="TA-Intro-Container">
          <header style={{ marginBottom: "10px" }}>
            Welcome to the Team Analyzer
          </header>
          <Card className="TA-Intro-Card">
            <Card.Header className="TA-Intro-Card-Header" textAlign="center">
              Instructions
            </Card.Header>
            <Card.Description className="TA-Intro-Card-Description">
              Choose players that are on your 12-Team fantasy league from the
              dropdowns. Then, select 'View Results' to see how the average of
              your team stats compare with that of the top 132 players in the
              league
            </Card.Description>
          </Card>
          <Button onClick={() => setHasPlayerChoosingBegun(true)}>Start</Button>
        </div>
      )}

      {hasPlayerChoosingBegun && (
        <div className="Team-Analyzer-Container">
          <PlayerDisplay selectedPlayers={selectedPlayers} />

          <Form className="Default-Form">
            <PlayerCard
              selectedPlayer={selectedPlayers[playerIndex]}
              playerOptions={playerOptions}
              playerIndex={playerIndex}
              setPlayerIndex={setPlayerIndex}
              selectedPlayers={selectedPlayers}
              setPlayerNameInput={setPlayerNameInput}
            />
            <div style={{ marginTop: "10px" }}>
              <ResultsModal
                selectedPlayers={selectedPlayers}
                selectedPlayer={selectedPlayers[playerIndex]}
                playerIndex={playerIndex}
                isPlayersCollectionFilled={isPlayersCollectionFilled}
              />
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}

export default TeamAnalyzer;
