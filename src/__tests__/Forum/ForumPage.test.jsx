import { UserProvider } from "../../UserContext";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForumPage from "../../Forum/ForumPage";
import axios from "axios";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockClear();
});

// Mock the useMediaQuery hook
jest.spyOn(require("react-responsive"), "useMediaQuery").mockReturnValue(true);

describe("Forum Page", () => {
  it("renders Display and Forum components", () => {
    render(
      <UserProvider>
        <ForumPage />
      </UserProvider>
    );
    expect(screen.getByTestId("Display")).toBeInTheDocument();
    expect(screen.getByTestId("Forum")).toBeInTheDocument();
  });

  it("sets isDisplayVisible to true following a delay once isLoading becomes false", async () => {
    const setIsDisplayVisible = jest.fn();
    axios.get.mockResolvedValue({ data: {} });
    global.setTimeout = jest.fn((callback) => callback());
    render(
      <UserProvider>
        <ForumPage
          isLoading={false}
          setIsDisplayVisible={setIsDisplayVisible}
        />
      </UserProvider>
    );

    await waitFor(() => expect(setIsDisplayVisible).toHaveBeenCalledWith(true));
  });
});
