import { UserProvider } from "../../UserContext";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Forum from "../../Forum/Forum";

import {
  getForumData,
  getFailedServerSideFetch,
} from "../__mocks__/Forum/ForumMock";

// Mock the useMediaQuery hook
jest.spyOn(require("react-responsive"), "useMediaQuery").mockReturnValue(true);

describe("Forum Page", () => {
  describe("Using successful fetch", () => {
    beforeEach(() => {
      getForumData();
    });

    it("On render, displays Loader component", async () => {
      render(
        <UserProvider>
          <Forum />
        </UserProvider>
      );

      expect(await screen.findByText("Loading")).toBeInTheDocument();
    });

    it("Properly maps to profile card images, as well as post images", async () => {
      render(<Forum />);

      expect(await screen.findAllByRole("img")).toHaveLength(4);
    });
  });

  describe("Using failed server-side fetch", () => {
    beforeEach(() => {
      getFailedServerSideFetch();
    });

    it("displays error headings", async () => {
      render(
        <UserProvider>
          <Forum />
        </UserProvider>
      );

      expect(await screen.findByText("Please Try Again")).toBeInTheDocument();
    });
  });
});
