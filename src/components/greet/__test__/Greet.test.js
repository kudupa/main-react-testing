import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

describe("Greet component", () => {
  it("should render hello in Greet component", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Should render Hello with name in Greet component", () => {
    render(<Greet name="Karthik" />);
    const textElement = screen.getByText(/hello Karthik/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Should render Hello with name in Greet component only", () => {
    render(<Greet name="Karthik" />);
    const textElement = screen.getByText(/hello Karthik/i);
    expect(textElement).toBeInTheDocument();
  });
});
