import { MockUserProvider } from "../__mocks__/UserContextMock";
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

const userId = 123;

describe("Forum", () => {
  describe("While user is signed in, has posts, and fetches are successful", () => {
    beforeEach(() => {
      getFPsWithPostsExceptUser(userId);
      getUserProfileWithPosts(userId);
    });

    // TODO: move this out from this describe block (doesn't have to do with the context)
    it("On render, displays Loader component", async () => {
      render(
        <Router>
          <MockUserProvider>
            <Forum />
          </MockUserProvider>
        </Router>
      );

      expect(await screen.findByText("Loading")).toBeInTheDocument();
    });

    it("Displays user profile card containing previous posts, followed by non-user profile cards", async () => {
      render(
        <Router>
          <MockUserProvider>
            <Forum />
          </MockUserProvider>
        </Router>
      );

      expect(await screen.findAllByRole("img")).toHaveLength(4);
    });
  });

  describe("While user is signed in, has no posts, and fetches are successful", () => {
    beforeEach(() => {
      getFPsWithPostsExceptUser(userId);
      getUserProfileWithoutPosts(userId);
    });

    it("Displays placeholder card prompting user to create first post, followed by non-user profile cards", async () => {
      render(
        <Router>
          <MockUserProvider>
            <Forum />
          </MockUserProvider>
        </Router>
      );

      expect(await screen.findAllByRole("img")).toHaveLength(4);
    });
  });

  describe("While user is not signed in and fetches are successful", () => {
    beforeEach(() => {
      getFPsWithPosts();
    });

    it("Displays all forum profile cards with posts", async () => {
      render(
        <Router>
          <MockUserProvider>
            <Forum />
          </MockUserProvider>
        </Router>
      );

      expect(await screen.findAllByRole("img")).toHaveLength(4);
    });
  });

  describe("While user is signed in and fetches are unsuccessful", () => {
    beforeEach(() => {
      getFPsWithPostsExceptUser500(userId);
      getUserProfile500(userId);
    });

    it("displays error headings", async () => {
      render(
        <Router>
          <MockUserProvider>
            <Forum />
          </MockUserProvider>
        </Router>
      );
      expect(await screen.findByText("Please Try Again")).toBeInTheDocument();
    });
  });

  describe("While user is not signed in and fetches are unsuccessful", () => {
    beforeEach(() => {
      getFPsWithPosts500();
    });

    it("displays error headings", async () => {
      render(
        <Router>
          <MockUserProvider>
            <Forum />
          </MockUserProvider>
        </Router>
      );
      expect(await screen.findByText("Please Try Again")).toBeInTheDocument();
    });
  });
});
