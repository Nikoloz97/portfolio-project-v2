import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
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
        <div className="ta-intro-container">
          <h1 className="ta-title">Welcome to the Team Analyzer</h1>

          <div className="ta-card">
            <div className="ta-card-content">
              <h2 className="ta-card-header">Instructions</h2>
              <p className="ta-card-description">
                Choose players that are on your 12-Team fantasy league from the
                dropdowns. Then, select 'View Results' to see how the average of
                your team stats compare with that of the top 132 players in the
                league.
              </p>
            </div>
          </div>

          <button
            className="ta-button"
            onClick={() => setHasPlayerChoosingBegun(true)}
          >
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      )}

      {hasPlayerChoosingBegun && (
        <div className="ta-main-container">
          <PlayerDisplay selectedPlayers={selectedPlayers} />

          <Form className="ta-form">
            <PlayerCard
              selectedPlayer={selectedPlayers[playerIndex]}
              playerOptions={playerOptions}
              playerIndex={playerIndex}
              setPlayerIndex={setPlayerIndex}
              selectedPlayers={selectedPlayers}
              setPlayerNameInput={setPlayerNameInput}
            />
            <div className="ta-results-button-container">
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
