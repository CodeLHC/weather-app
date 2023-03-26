import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App location={forecast.location} forecasts={forecast.forecasts} />);
    const h1Element = screen.getByText(/Manchester, UK/i);
    const temperature = screen.getByText(/11°C/i);
    expect(h1Element).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
  });
});
