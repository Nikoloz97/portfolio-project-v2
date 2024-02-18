import { render } from "@testing-library/react";
import PlayerCard from "../../Projects/Basketball/TeamAnalyzer/PlayerCard";

describe("Player Card", () => {
  const mockNonSelectedPlayer = {
    playerName: "",
    teamName: "",
    playerURL: "",
    stats: [
      {
        name: "PTS",
        value: 0,
      },
      {
        name: "FG%",
        value: 0,
      },
      {
        name: "FT%",
        value: 0,
      },
      {
        name: "3PM",
        value: 0,
      },
      {
        name: "Rebounds",
        value: 0,
      },
      {
        name: "Blocks",
        value: 0,
      },
      {
        name: "Turnovers",
        value: 0,
      },
      {
        name: "Assists",
        value: 0,
      },
      {
        name: "Steals",
        value: 0,
      },
    ],
  };
  const mockSelectedPlayer = {
    playerName: "LaMelo Ball",
    teamName: "CHA",
    playerURL: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png",
    stats: [
      {
        name: "PTS",
        value: 23.9,
      },
      {
        name: "FG%",
        value: 43.3,
      },
      {
        name: "FT%",
        value: 86.5,
      },
      {
        name: "3PM",
        value: 3.2,
      },
      {
        name: "Rebounds",
        value: 5.1,
      },
      {
        name: "Blocks",
        value: 0.2,
      },
      {
        name: "Turnovers",
        value: 3.8,
      },
      {
        name: "Assists",
        value: 8,
      },
      {
        name: "Steals",
        value: 1.8,
      },
    ],
  };
  it("Displays player silhouette on card prior to player selection", () => {
    render(
      <PlayerCard
        selectedPlayers={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        playerOptions={[
          {
            key: 1,
            text: "LaMelo Ball",
            value: "LaMelo Ball",
          },
        ]}
        playerDropdown={[
          {
            key: 1,
            label: "Player one",
            placeholder: "Choose player one",
            options: [
              {
                key: 1,
                text: "LaMelo Ball",
                value: "LaMelo Ball",
              },
            ],
          },
        ]}
        selectedPlayer={mockNonSelectedPlayer}
      />
    );
  });

  it("Player card is populated following player selection", () => {
    render(
      <PlayerCard
        selectedPlayers={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        playerOptions={[
          {
            key: 1,
            text: "LaMelo Ball",
            value: "LaMelo Ball",
          },
        ]}
        playerDropdown={[
          {
            key: 1,
            label: "Player one",
            placeholder: "Choose player one",
            options: [
              {
                key: 1,
                text: "LaMelo Ball",
                value: "LaMelo Ball",
              },
            ],
          },
        ]}
        selectedPlayer={mockSelectedPlayer}
      />
    );
  });
});
