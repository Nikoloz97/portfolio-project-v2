import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Forum from "../../Forum/Forum";
import { apiForumRoot } from "../../Utils/ApiRoutes";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet(apiForumRoot).reply(200, { data: {} });

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
