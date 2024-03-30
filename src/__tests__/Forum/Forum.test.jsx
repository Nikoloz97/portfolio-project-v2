import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Forum from "../../Forum/Forum";

import {
  getFPsWithPostsExceptUser500,
  getFPsWithPosts500,
  getUserProfile500,
  getFPsWithPostsExceptUser,
  getFPsWithPosts,
  getUserProfileWithPosts,
  getUserProfileWithoutPosts,
} from "../__mocks__/Forum/ForumMock";

import { BrowserRouter as Router } from "react-router-dom";
import { useUserContext } from "../../UserContext";

jest.mock("../../UserContext", () => ({
  useUserContext: jest.fn(),
}));

const userId = 123;

describe("Forum", () => {
  describe("While user is signed in, has posts, and fetches are successful", () => {
    beforeEach(() => {
      getFPsWithPostsExceptUser(userId);
      getUserProfileWithPosts(userId);
      useUserContext.mockImplementation(() => ({
        user: { userId: 123 },
        isUserSignedIn: true,
        isDesktop: true,
        isMonitor: true,
      }));
    });

    // TODO: move this out from this describe block (doesn't have to do with the context)
    it("On render, displays Loader component", async () => {
      render(<Forum />);

      expect(await screen.findByText("Loading")).toBeInTheDocument();
    });

    it("Displays profile image and post image for user, followed by that of two non-users", async () => {
      render(
        <Router>
          <Forum />
        </Router>
      );

      expect(await screen.findAllByRole("img")).toHaveLength(6);
    });
  });

  describe("While user is signed in, has no posts, and fetches are successful", () => {
    beforeEach(() => {
      getFPsWithPostsExceptUser(userId);
      getUserProfileWithoutPosts(userId);
      useUserContext.mockImplementation(() => ({
        user: { userId: 123 },
        isUserSignedIn: true,
        isDesktop: true,
        isMonitor: true,
      }));
    });

    it("Displays placeholder card prompting user to create first post, followed by non-user profile cards", async () => {
      render(
        <Router>
          <Forum />
        </Router>
      );

      expect(await screen.findAllByRole("img")).toHaveLength(4);
    });
  });

  describe("While user is not signed in and fetches are successful", () => {
    beforeEach(() => {
      getFPsWithPosts();
      useUserContext.mockImplementation(() => ({
        user: null,
        isUserSignedIn: false,
        isDesktop: true,
        isMonitor: true,
      }));
    });

    it("Displays all forum profile cards with posts", async () => {
      render(
        <Router>
          <Forum />
        </Router>
      );

      expect(await screen.findAllByRole("img")).toHaveLength(4);
    });
  });

  describe("While user is signed in and fetches are unsuccessful", () => {
    beforeEach(() => {
      getFPsWithPostsExceptUser500(userId);
      getUserProfile500(userId);
      useUserContext.mockImplementation(() => ({
        user: { userId: 123 },
        isUserSignedIn: true,
        isDesktop: true,
        isMonitor: true,
      }));
    });

    it("displays error headings", async () => {
      render(
        <Router>
          <Forum />
        </Router>
      );
      expect(await screen.findByText("Please Try Again")).toBeInTheDocument();
    });
  });

  describe("While user is not signed in and fetches are unsuccessful", () => {
    beforeEach(() => {
      getFPsWithPosts500();
      useUserContext.mockImplementation(() => ({
        user: null,
        isUserSignedIn: false,
        isDesktop: true,
        isMonitor: true,
      }));
    });

    it("displays error headings", async () => {
      render(
        <Router>
          <Forum />
        </Router>
      );
      expect(await screen.findByText("Please Try Again")).toBeInTheDocument();
    });
  });
});
