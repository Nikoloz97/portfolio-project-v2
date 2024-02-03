import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Forum from "../../Forum/Forum";
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

const forumProfilesMockProps = {
  projectData: {
    introText: "Projects",
    introSubtext:
      "Select the arrow on the right to navigate to my various projects - or click on the links below",
    linkUrls: [
      { title: "Kronos", url: "/projects/kronos" },
      { title: "Calculator", url: "/projects/calculator" },
      { title: "Geography Game", url: "/projects/geography-game" },
      { title: "Fantasy Basketball", url: "/projects/fantasy-basketball" },
    ],
  },
  projectsDataLength: 1,
  currentProjectIndex: 0,
  goToNextProject: jest.fn(),
  goToPrevProject: jest.fn(),
};

describe("Forum screen", () => {
  it("renders correctly", async () => {
    // Create mock functions for props
    render(
      <Forum
        setIsLoading={jest.fn()}
        setIsErrorModalDisplayed={jest.fn()}
        setIsRetryingFetch={jest.fn()}
        setIsFetchSuccessful={jest.fn()}
      />
    );
    // Wait for state updates (in promises) to complete
    await waitFor(() => {});
  });
});
