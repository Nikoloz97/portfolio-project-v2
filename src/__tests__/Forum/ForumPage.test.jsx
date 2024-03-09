import { UserProvider } from "../../UserContext";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForumPage from "../../Forum/Forum";

import {
  getForumData,
  getFailedServerSideFetch,
} from "../Mocks/Forum/ForumPageMock";

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
          <ForumPage />
        </UserProvider>
      );

      expect(await screen.findByText("Loading")).toBeInTheDocument();
    });

    it("Once loading is complete, renders cards", async () => {
      render(
        <UserProvider>
          <ForumPage />
        </UserProvider>
      );

      expect(
        await screen.findByText("Welcome to the Forum")
      ).toBeInTheDocument();
    });

    // TODO: Make this pass
    // it("renders forum component on successful fetch", async () => {
    //   await act(async () => {
    //     render(
    //       <UserProvider>
    //         <ForumPage />
    //       </UserProvider>
    //     );
    //   });

    //   await act(async () => {
    //     screen.debug();
    //     expect(await screen.findByTestId("Forum")).toBeInTheDocument();
    //   });
    // });
  });

  describe("Using failed server-side fetch", () => {
    beforeEach(() => {
      getFailedServerSideFetch();
    });

    it("displays error headings", async () => {
      render(
        <UserProvider>
          <ForumPage />
        </UserProvider>
      );

      expect(await screen.findByText("Please Try Again")).toBeInTheDocument();
    });

    // TODO: change test (do not check for state changes)
    // it("isDisplayToBeginFadeIn state is set to true once isFetchSuccessful becomes false", async () => {
    //   render(
    //     <UserProvider>
    //       <ForumPage />
    //     </UserProvider>
    //   );

    //   const displayElement = await screen.findByTestId("Display");

    //   await waitFor(() => {
    //     expect(displayElement).toHaveAttribute("data-state", "true");
    //   });
    // });

    it("does not render forum component on unsuccessful fetch", async () => {
      render(
        <UserProvider>
          <ForumPage />
        </UserProvider>
      );

      await waitFor(() => {
        expect(screen.queryByText("Follow")).toBeNull();
      });
    });
  });
});
