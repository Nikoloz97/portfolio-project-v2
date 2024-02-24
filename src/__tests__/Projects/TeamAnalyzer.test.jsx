import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamAnalyzer from "../../Projects/Basketball/TeamAnalyzer/TeamAnalyzer";
import {
  getPlayerInfo,
  getPlayerList,
} from "../Mocks/Projects/TeamAnalyzerMocks";

// TODO: Continue tutorial (11:23) - https://www.youtube.com/watch?v=0Y11K7KSC80&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=10

describe("Team Analyzer", () => {
  getPlayerList();

  describe("Dealing with player options", () => {
    it("Displays first card following selection of the start button", async () => {
      await act(async () => {
        render(<TeamAnalyzer />);
      });

      fireEvent.click(screen.getByRole("button", { name: "Start" }));

      await waitFor(() =>
        expect(screen.getByText("Choose player one")).toBeInTheDocument()
      );
    });

    // TODO: remove(for now use it for reference for below)
    // it("Dropdown options reflect longName property from object array in api fetch", async () => {
    //   await act(async () => {
    //     render(<TeamAnalyzer />);
    //   });

    //   fireEvent.click(screen.getByRole("button", { name: "Start" }));

    //   await waitFor(() =>
    //     expect(screen.getByText("LaMelo Ball")).toBeInTheDocument()
    //   );
    // });

    // TODO: make test
    // it("Suggestion input works upon user typing in text", async() => {

    // })
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
