import { UserProvider } from "../../UserContext";
import { render, screen } from "@testing-library/react";
import Home from "../Home/Home.jsx";

// Mock the useMediaQuery hook
jest.spyOn(require("react-responsive"), "useMediaQuery").mockReturnValue(true);

describe("Home Page", () => {
  it("Displays text for welcome, coding, medicine, and tutoring screens", () => {
    render(
      <UserProvider>
        <Home />
      </UserProvider>
    );

    const welcomeScreenText = screen.getByText("Welcome, Guest.");
    const codingScreenText = screen.getByText("Coding Test");
    const medicineScreenText = screen.getByText("Medicine Test");
    const tutoringScreenText = screen.getByText("Tutoring Test");

    expect(welcomeScreenText).toBeInTheDocument();
    expect(codingScreenText).toBeInTheDocument();
    expect(medicineScreenText).toBeInTheDocument();
    expect(tutoringScreenText).toBeInTheDocument();
  });
});
