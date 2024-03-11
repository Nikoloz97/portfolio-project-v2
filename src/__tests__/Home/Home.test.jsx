import { UserProvider } from "../../UserContext";
import { render, screen } from "@testing-library/react";
import Home from "../../Home/Home";

// Mock the useMediaQuery hook
jest.spyOn(require("react-responsive"), "useMediaQuery").mockReturnValue(true);

describe("Home Page", () => {
  it("On render, displays coding, medicine, and tutoring text", async () => {
    render(
      <UserProvider>
        <Home />
      </UserProvider>
    );

    // TODO: fix (stops at "Welcom")
    // const welcomeScreenText = await screen.findByText(/^Welcome,$/);
    const codingScreenText = screen.getByText("Coding Test");
    const medicineScreenText = screen.getByText("Medicine Test");
    const tutoringScreenText = screen.getByText("Tutoring Test");

    // expect(welcomeScreenText).toBeInTheDocument();
    expect(codingScreenText).toBeInTheDocument();
    expect(medicineScreenText).toBeInTheDocument();
    expect(tutoringScreenText).toBeInTheDocument();
  });
});
