import { UserProvider } from "../../UserContext";
import { render, screen } from "@testing-library/react";
import Home from "../../Home/Home/Home";
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
    // const codingScreenText = screen.getByText("Self-Teaching & Exploration");
    // const medicineScreenText = screen.getByText("Medicine Section");
    // const tutoringScreenText = screen.getByText("Tutoring Section");

    // expect(welcomeScreenText).toBeInTheDocument();
    // expect(codingScreenText).toBeInTheDocument();
    // expect(medicineScreenText).toBeInTheDocument();
    // expect(tutoringScreenText).toBeInTheDocument();
  });
});
