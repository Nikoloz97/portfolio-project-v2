import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ForumPage from "../../Forum/ForumPage";

describe("Forum Page", () => {
  it("Handle scroll down moves screen from display to forum", () => {
    render(<ForumPage />);

    // TODO: determine how to test this
  });
});
