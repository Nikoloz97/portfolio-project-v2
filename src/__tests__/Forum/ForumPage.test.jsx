import { UserProvider } from "../../UserContext";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForumPage from "../../Forum/ForumPage";

import {
  getForumData,
  getFailedServerSideFetch,
} from "../Mocks/Forum/ForumPageMock";

// Mock the useMediaQuery hook
jest.spyOn(require("react-responsive"), "useMediaQuery").mockReturnValue(true);

describe("Forum Page", () => {
  describe("Using successful mock fetch", () => {
    getForumData();

    it("renders Loader element in Display component on render", async () => {
      await act(async () => {
        render(
          <UserProvider>
            <ForumPage />
          </UserProvider>
        );
      });

      expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("Once isLoading state becomes false, display text is rendered", async () => {
      await act(async () => {
        render(
          <UserProvider>
            <ForumPage />
          </UserProvider>
        );
      });

      const welcomeMessage = await screen.findByText("Welcome to the Forum");

      await act(async () => {
        await waitFor(() => expect(welcomeMessage).toBeInTheDocument());
      });
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

  describe("Using failed mock fetch", () => {
    getFailedServerSideFetch();

    it("renders ForumErrorModal component on unsuccessful fetch", async () => {
      await act(async () => {
        render(
          <UserProvider>
            <ForumPage />
          </UserProvider>
        );
      });

      await waitFor(() => {
        expect(
          screen.getByText("Would you like to retry?")
        ).toBeInTheDocument();
      });
    });

    it("isDisplayToBeginFadeIn state is set to true once isFetchSuccessful becomes false", async () => {
      await act(async () => {
        render(
          <UserProvider>
            <ForumPage />
          </UserProvider>
        );
      });

      await waitFor(() => {
        expect(screen.getByTestId("Display")).toHaveAttribute(
          "data-state",
          "true"
        );
      });
    });

    it("does not render forum component on unsuccessful fetch", async () => {
      await act(async () => {
        render(
          <UserProvider>
            <ForumPage />
          </UserProvider>
        );
      });

      await waitFor(() => {
        expect(screen.queryByTestId("Forum")).toBeNull();
      });
    });
  });
});
