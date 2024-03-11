import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlayerCard from "../../Projects/Basketball/TeamAnalyzer/PlayerCard";
import {
  mockSelectedPlayer,
  mockSelectedPlayers,
  mockNonSelectedPlayer,
} from "../__mocks__/Projects/PlayerCardMock";

describe("Player Card", () => {
  it("Displays player silhouette on card prior to player selection", () => {
    render(
      <PlayerCard
        selectedPlayers={mockSelectedPlayers}
        selectedPlayer={mockNonSelectedPlayer}
        playerOptions={["LaMelo Ball", "LeBron James", "James Harden"]}
      />
    );

    const headshotElement = screen.getByRole("img");

    expect(headshotElement.src).not.toBe(mockSelectedPlayer.playerURL);
  });

  it("Input suggestion is filled following user input", () => {
    render(
      <PlayerCard
        selectedPlayers={mockSelectedPlayers}
        selectedPlayer={mockSelectedPlayer}
        playerOptions={["LaMelo Ball", "LeBron James", "James Harden"]}
      />
    );

    const userInputElement = screen.getByPlaceholderText(
      "Type your player here..."
    );

    userEvent.type(userInputElement, "Leb");

    const InputElements = screen.getAllByRole("textbox");

    const suggestionInputElement = InputElements.find(
      (input) => input.disabled
    );

    expect(suggestionInputElement).toHaveValue("LeBron James");
  });

  it("Player card is populated following player selection", async () => {
    render(
      <PlayerCard
        selectedPlayers={mockSelectedPlayers}
        selectedPlayer={mockSelectedPlayer}
        playerOptions={["LaMelo Ball", "LeBron James", "James Harden"]}
        setPlayerNameInput={jest.fn()}
      />
    );

    const userInputElement = screen.getByPlaceholderText(
      "Type your player here..."
    );

    userEvent.type(userInputElement, "LaMelo Ball{enter}");

    await waitFor(() =>
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        "LAMELO BALL"
      )
    );
  });
});
