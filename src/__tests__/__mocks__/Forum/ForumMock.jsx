import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { apiForumRoot } from "../../../Utils/ApiRoutes";

const mock = new MockAdapter(axios);

export const getFPsWithPostsExceptUser500 = (userId) => {
  mock.onGet(apiForumRoot + "/ForumProfilesWithPosts/" + userId).reply(500);
};
export const getFPsWithPosts500 = () => {
  mock.onGet(apiForumRoot + "/ForumProfilesWithPosts").reply(500);
};
export const getUserProfile500 = (userId) => {
  mock.onGet(apiForumRoot + "/UserProfile/" + userId).reply(500);
};

export const getFPsWithPostsExceptUser = (userId) => {
  mock.onGet(apiForumRoot + "/ForumProfilesWithPosts/" + userId).reply(200, [
    {
      age: 30,
      userId: 1,
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
          photoURL: "testCommentUrl",
          postId: 1,
          postedDate: "2023-07-09T17:38:15",
          text: "I prefer working with 21 Savage than Drake - I mean look at that smile.",
          title: "Drake vs 21 Savage",
        },
      ],
      postsCount: 1,
      profileURL: "testURL",
    },
    {
      age: 30,
      userId: 2,
      displayName: "Future Hendrix",
      followerCount: 1,
      followers: [
        { displayName: "Drake Parker", followerId: 1, profileURL: "testUrl" },
      ],
      followingCount: 1,
      followings: [
        { displayName: "Drake Parker", followerId: 1, profileURL: "testUrl" },
      ],
      forumProfileId: 2,
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
          photoURL: "testCommentUrl",
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
};

export const getFPsWithPosts = () => {
  mock.onGet(apiForumRoot + "/ForumProfilesWithPosts").reply(200, [
    {
      age: 30,
      userId: 1,
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
          photoURL: "testCommentUrl",
          postId: 1,
          postedDate: "2023-07-09T17:38:15",
          text: "I prefer working with 21 Savage than Drake - I mean look at that smile.",
          title: "Drake vs 21 Savage",
        },
      ],
      postsCount: 1,
      profileURL: "testURL",
    },
    {
      age: 30,
      userId: 2,
      displayName: "Future Hendrix",
      followerCount: 1,
      followers: [
        { displayName: "Drake Parker", followerId: 1, profileURL: "testUrl" },
      ],
      followingCount: 1,
      followings: [
        { displayName: "Drake Parker", followerId: 1, profileURL: "testUrl" },
      ],
      forumProfileId: 2,
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
          photoURL: "testCommentUrl",
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
};

export const getUserProfileWithPosts = (userId) => {
  mock.onGet(apiForumRoot + "/UserProfile/" + userId).reply(200, {
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
        photoURL: "testCommentUrl",
        postId: 1,
        postedDate: "2023-07-09T17:38:15",
        text: "I prefer working with 21 Savage than Drake - I mean look at that smile.",
        title: "Drake vs 21 Savage",
      },
    ],
    postsCount: 1,
    profileURL: "testURL",
  });
};

export const getUserProfileWithoutPosts = (userId) => {
  mock.onGet(apiForumRoot + "/UserProfile/" + userId).reply(200, {
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
    posts: [],
    postsCount: 0,
    profileURL: "testURL",
  });
};
