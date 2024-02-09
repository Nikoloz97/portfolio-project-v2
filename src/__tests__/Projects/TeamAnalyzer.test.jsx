import { render, screen, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamAnalyzer from "../../Projects/Basketball/TeamAnalyzer/TeamAnalyzer";
import axios from "axios";

import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

// TODO: Continue tutorial (11:23) - https://www.youtube.com/watch?v=0Y11K7KSC80&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=10

describe("Team Analyzer", () => {
  describe("dealing with player options", () => {
    // Corrected the arrow function here
    mock
      .onGet("https://tank01-fantasy-stats.p.rapidapi.com/getNBAPlayerList")
      .reply(200, {
        body: [
          {
            playerID: "94914298027",
            team: "CHA",
            longName: "LaMelo Ball",
            teamID: "4",
          },

          {
            playerID: "94914479047",
            team: "MIA",
            longName: "Tyler Herro",
            teamID: "16",
          },
          {
            playerID: "94614279027",
            team: "ORL",
            longName: "Franz Wagner",
            teamID: "22",
          },
        ],
      });

    it("Dropdown options reflect longName property from object array in api fetch", async () => {
      await act(async () => {
        render(<TeamAnalyzer />);
      });

      await waitFor(
        () => expect(screen.getAllByText("LaMelo Ball")).toHaveLength(12),
        expect(screen.getAllByText("Tyler Herro")).toHaveLength(12),
        expect(screen.getAllByText("Franz Wagner")).toHaveLength(12)
      );
    });
  });

  // describe("dealing with player-specific data"), () => {};
});
