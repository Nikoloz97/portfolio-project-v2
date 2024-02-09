import React, { useState, useEffect } from "react";
import { Form, Dropdown, Card, Image } from "semantic-ui-react";
import axios from "axios";
import ResultsModal from "./ResultsModal";
import {
  selectedPlayersArray,
  generatePlayerDropdowns,
  populateCurrentPlayer,
} from "../../../Utils/Projects/FantasyBball/TeamAnalyzer";

function TeamAnalyzer() {
  const [selectedPlayers, setSelectedPlayers] = useState(selectedPlayersArray);

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
        console.log(response);
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

  const handleDropdownSelection = (index, event) => {
    const value = event.target.innerText;
    const updatedSelectedPlayers = [...selectedPlayers];
    updatedSelectedPlayers[index].playerName = value;

    setSelectedPlayers(updatedSelectedPlayers);

    setLatestDropdownModifiedIndex(index);

    setPlayerNameInput(value);
  };

  return (
    <div className="Default-Page">
      <header>Welcome to the Team Analyzer</header>
      <Form className="Default-Form">
        {playerDropdowns.map((x, index) => (
          <div key={x.key}>
            {/* TODO: Fix dropdown (enter = not working) */}
            <Dropdown
              placeholder={x.placeholder}
              fluid
              search
              selection
              options={playerOptions}
              onChange={(event) => handleDropdownSelection(index, event)}
            />

            {selectedPlayers[index].isModified && (
              <Card>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={selectedPlayers[index].playerURL}
                  />
                  <Card.Header>{selectedPlayers[index].playerName}</Card.Header>
                  <Card.Meta>{selectedPlayers[index].teamName}</Card.Meta>

                  <Card.Description>
                    {selectedPlayers[index].stats.map((stat) => (
                      <div key={stat.name}>
                        <header>{stat.name}</header>
                        <p>{stat.value}</p>
                      </div>
                    ))}
                  </Card.Description>
                </Card.Content>
              </Card>
            )}
          </div>
        ))}

        <ResultsModal dropdownSelectedPlayers={selectedPlayers} />
      </Form>
    </div>
  );
}

export default TeamAnalyzer;
