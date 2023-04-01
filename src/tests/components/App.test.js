import { render } from "@testing-library/react";
import React from "react";
import App from "../../components/App";

describe("App", () => {
  const location = {
    city: "Manchester",
    country: "GB",
  };
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      icon: "stubIcon1",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: "stubIcon2",
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(
      <App location={location.location} forecasts={validProps.forecasts} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
