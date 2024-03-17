import { UserProvider } from "../../UserContext";
import { MockUserProvider } from "../__mocks__/UserContextMock";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Forum from "../../Forum/Forum";

import {
  getForumData,
  getFailedServerSideFetch,
} from "../__mocks__/Forum/ForumMock";

import { BrowserRouter as Router } from "react-router-dom";

describe("Forum", () => {
  describe("Using successful fetch", () => {
    beforeEach(() => {
      getForumData();
    });

    it("On render, displays Loader component", async () => {
      render(
        <Router>
          <UserProvider>
            <Forum />
          </UserProvider>
        </Router>
      );

      expect(await screen.findByText("Loading")).toBeInTheDocument();
    });

    it("Properly maps to profile card images, as well as post images", async () => {
      render(
        <Router>
          <UserProvider>
            <Forum />
          </UserProvider>
        </Router>
      );

      expect(await screen.findAllByRole("img")).toHaveLength(4);
    });
  });

  describe("Using failed server-side fetch", () => {
    beforeEach(() => {
      getFailedServerSideFetch();
    });

    it("displays error headings", async () => {
      render(
        <Router>
          <UserProvider>
            <Forum />
          </UserProvider>
        </Router>
      );
      expect(await screen.findByText("Please Try Again")).toBeInTheDocument();
    });
  });
});
