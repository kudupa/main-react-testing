import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
  it("Should render counter component", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent("0");
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders a count of 1 upon clicking Icrement button", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent("0");
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();

    userEvent.click(buttonElement);
    expect(counterElement).toHaveTextContent("1");
  });

  it("Renders count of 10 upon clicking set", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toBeInTheDocument();

    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toBeInTheDocument();

    userEvent.type(amountInput, "10");
    const setButton = screen.getByRole("button", { name: /Set/i });
    expect(amountInput).toHaveValue(10);
    userEvent.click(setButton);
    expect(counterElement).toHaveTextContent("10");
  });

  it.only("Elements are focused in the right order", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /Increment/i });
    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toBeInTheDocument();
    const setButton = screen.getByRole("button", { name: /Set/i });

    userEvent.tab();
    expect(incrementBtn).toHaveFocus();
    userEvent.tab();
    expect(amountInput).toHaveFocus();
    userEvent.tab();
    expect(setButton).toHaveFocus();
  });
});
