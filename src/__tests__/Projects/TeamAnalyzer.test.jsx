import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TeamAnalyzer from "../../Projects/Basketball/TeamAnalyzer/TeamAnalyzer";
import {
  getPlayerInfo,
  getPlayerList,
} from "../__mocks__/Projects/TeamAnalyzerMocks";

// TODO: Continue tutorial (11:23) - https://www.youtube.com/watch?v=0Y11K7KSC80&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=10

describe("Team Analyzer", () => {
  getPlayerList();

  describe("Dealing with player options", () => {
    it("Displays 2 input elements (user and suggestion) following start button click", async () => {
      render(<TeamAnalyzer />);

      userEvent.click(screen.getByRole("button", { name: "Start" }));

      expect(await screen.findAllByRole("textbox")).toHaveLength(2);
    });
  });

  describe("Dealing with player-specific data", () => {
    getPlayerInfo();

    // TODO: Find a way to make this test work?
    // 1. Looks like 2nd fireEvent occurs before 1st
    // 2. Cards are already pre-populated because of mock fetch (I think)
    // it("Following clicking start, player card becomes populated with FG% following dropdown selection", async () => {
    //   await act(async () => {
    //     render(<TeamAnalyzer />);
    //   });

    //   fireEvent.click(screen.getByRole("button", { name: "Start" }));

    //   fireEvent.click(screen.getByText("LaMelo Ball"));

    //   await waitFor(() => expect(screen.getByText("43.3")).toBeInTheDocument());
    // });
  });
});
