import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserProvider } from "../Mocks/UserContextMock";
import Coding from "../../Home/Coding";

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
