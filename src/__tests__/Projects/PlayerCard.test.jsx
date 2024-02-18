import { render } from "@testing-library/react";
import PlayerCard from "../../Projects/Basketball/TeamAnalyzer/PlayerCard";
import {
  mockSelectedPlayer,
  mockNonSelectedPlayer,
} from "../Mocks/Projects/PlayerCardMock";

describe("Player Card", () => {
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
