import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import ResultsModal from "./ResultsModal";
import {
  selectedPlayersArray,
  generatePlayerDropdowns,
  populateCurrentPlayer,
} from "../../../Utils/Projects/FantasyBball/TeamAnalyzer";

function TeamAnalyzer() {
  const [selectedPlayers, setSelectedPlayers] = useState(selectedPlayersArray);

  const [playerIndex, setPlayerIndex] = useState(0);

  const [playerNameInput, setPlayerNameInput] = useState("");

  const [latestDropdownModifiedIndex, setLatestDropdownModifiedIndex] =
    useState(0);

  const [playerOptions, setPlayerOptions] = useState([]);

  const playerDropdowns = generatePlayerDropdowns(playerOptions);

  const populatePlayerOptions = (playerOptionsData) => {
    const playerOptionsList = [
      playerOptionsData.map((playerObj) => ({
        key: playerObj.playerID,
        text: playerObj.longName,
        value: playerObj.longName,
      })),
    ];
    setPlayerOptions(playerOptionsList[0]);
  };

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
        populatePlayerOptions(response.data.body);
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

        const currentPlayer =
          updatedSelectedPlayers[latestDropdownModifiedIndex];

        const fetchedData = response.data.body[0];

        console.log(playerNameInput);

        populateCurrentPlayer(
          updatedSelectedPlayers,
          currentPlayer,
          fetchedData,
          latestDropdownModifiedIndex,
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

  const handleDropdownSelection = (event) => {
    const value = event.target.innerText;
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[playerIndex].playerName = value;

    setSelectedPlayers(updatedSelectedPlayers);

    setLatestDropdownModifiedIndex(playerIndex);

    setPlayerNameInput(value);
  };

  return (
    <div className="Default-Page">
      <header>Welcome to the Team Analyzer</header>
      <Form className="Default-Form">
        <PlayerCard
          selectedPlayer={selectedPlayers[playerIndex]}
          playerDropdown={playerDropdowns[playerIndex]}
          playerOptions={playerOptions}
          handleDropdownSelection={handleDropdownSelection}
        />

        <Button
          disabled={playerIndex === 0}
          onClick={() => setPlayerIndex(playerIndex - 1)}
        >
          Previous
        </Button>

        <Button
          disabled={playerIndex === selectedPlayers.length - 1}
          onClick={() => setPlayerIndex(playerIndex + 1)}
        >
          Next
        </Button>

        {playerIndex === selectedPlayers.length - 1 && (
          <ResultsModal dropdownSelectedPlayers={selectedPlayers} />
        )}
      </Form>
    </div>
  );
}

export default TeamAnalyzer;
