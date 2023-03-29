import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 30,
    wind: {
      speed: 60,
      direction: "ne",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
