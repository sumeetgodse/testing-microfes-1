import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Container } from "./Container";

describe("test text", () => {
  it("test text", () => {
    render(<Container />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });
});
