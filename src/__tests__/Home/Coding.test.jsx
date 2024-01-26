import { UserProvider } from "../../UserContext";
import { render, screen } from "@testing-library/react";
import Coding from "../../Home/Coding";

// Mock the useMediaQuery hook
jest.spyOn(require("react-responsive"), "useMediaQuery").mockReturnValue(true);

describe("Coding screen", () => {
  it("text header is displayed", () => {
    render(
      <UserProvider>
        <Coding />
      </UserProvider>
    );

    const text = screen.getByText("Coding Test");
    expect(text).toBeInTheDocument();
  });
});
