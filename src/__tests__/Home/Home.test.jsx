import { UserProvider } from "../../UserContext";
import { render, screen } from "@testing-library/react";
import Home from "../../Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home Page", () => {
  it("On render, displays coding, medicine, and tutoring text", async () => {
    render(
      <Router>
        <UserProvider>
          <Home />
        </UserProvider>
      </Router>
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
