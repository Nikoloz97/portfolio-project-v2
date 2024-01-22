import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Forum from "../../Forum/Forum";

describe("Forum screen", () => {
  it("Forum profile data from fetch is passed to forum card", () => {
    render(<Forum />);

    // TODO: determine how to implement test
  });
});
