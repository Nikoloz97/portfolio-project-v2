import { UserProvider } from "../../UserContext";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForumPage from "../../Forum/ForumPage";
import axios from "axios";

import { apiForumRoot } from "../../Utils/ApiRoutes";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";

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
  // TODO: uncomment and/or update once loading component created
  // it("renders loading screen on render", async () => {
  //   await act(async () => {
  //     render(
  //       <UserProvider>
  //         <ForumPage />
  //       </UserProvider>
  //     );
  //   });
  //   expect(screen.getByTestId("Loading-Screen")).toBeInTheDocument();
  // });

  // TODO: Update test (instead of setIsDisplayVisible, waitFor should look at isDisplayVisible state)
  // it("isDisplayVisible state is set to true once isLoading becomes false following delay", async () => {
  //   const setIsDisplayVisible = jest.fn();
  //   jest.useFakeTimers();

  //   render(
  //     <UserProvider>
  //       <ForumPage
  //         isLoading={false}
  //         setIsDisplayVisible={setIsDisplayVisible}
  //       />
  //     </UserProvider>
  //   );

  //   jest.runAllTimers();

  //   await waitFor(() => {
  //     expect(setIsDisplayVisible).toHaveBeenCalledWith(true);
  //   });
  // });

  it("Once isLoading state becomes false, display text is rendered following a delay", async () => {
    const setIsDisplayVisible = jest.fn();
    jest.useFakeTimers();

    render(
      <UserProvider>
        <ForumPage
          isLoading={false}
          setIsDisplayVisible={setIsDisplayVisible}
        />
      </UserProvider>
    );

    const welcomeMessage = await screen.findByText("Welcome to the Forum");

    jest.runAllTimers();

    await waitFor(() => expect(welcomeMessage).toBeInTheDocument());
  });
});
