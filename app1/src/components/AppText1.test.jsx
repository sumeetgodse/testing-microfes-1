import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppText1 from "./AppText1";
import React from "react";

describe("test text", () => {
  it("test text", () => {
    render(<AppText1 />);
    expect(screen.getByText("Hello! I am from App 1")).toBeInTheDocument();
  });
});
