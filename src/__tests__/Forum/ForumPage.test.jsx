import { UserProvider } from "../../UserContext";
import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForumPage from "../../Forum/ForumPage";
import axios from "axios";

import { apiForumRoot } from "../../Utils/ApiRoutes";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet(apiForumRoot).reply(200, [
  {
    age: 30,
    displayName: "Future Hendrix",
    followerCount: 1,
    followers: [
      { displayName: "Drake Parker", followerId: 1, profileURL: "testUrl" },
    ],
    followingCount: 1,
    followings: [
      { displayName: "Drake Parker", followerId: 1, profileURL: "testUrl" },
    ],
    forumProfileId: 1,
    interests: [{ description: "Smokes weed and gets high", interestId: 3 }],
    posts: [
      {
        commentCount: 1,
        comments: [
          {
            commentDate: "2023-07-12T20:38:15",
            commentId: 1,
            displayName: "Tom Segura",
            flags: 0,
            likes: 5,
            profileUrl: "testUrl",
            text: "First.",
          },
        ],
        flags: 0,
        likes: 0,
        photoURL: "testPhotoUrl",
        postId: 1,
        postedDate: "2023-07-09T17:38:15",
        text: "I prefer working with 21 Savage than Drake - I mean look at that smile.",
        title: "Drake vs 21 Savage",
      },
    ],
    postsCount: 1,
    profileURL: "testURL",
  },
]);

// Mock the useMediaQuery hook
jest.spyOn(require("react-responsive"), "useMediaQuery").mockReturnValue(true);

describe("Forum Page", () => {
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

  //Mock failed axios fetch
  mock.onGet(apiForumRoot).reply(500);

  it("renders ForumErrorModal component on unsuccessful fetch", async () => {
    await act(async () => {
      render(
        <UserProvider>
          <ForumPage />
        </UserProvider>
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Would you like to retry?")).toBeInTheDocument();
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
      screen.debug();
      expect(screen.queryByTestId("Forum")).toBeNull();
    });
  });
  // TODO: continue along tutorial: https://www.youtube.com/watch?v=PLL5Pvuk-tw&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=6
});
