import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils";
import CounterTwo from "./CounterTwo";

const mockHandleIncrement = jest.fn();
const mockHandleDecrement = jest.fn();

describe("CounterTwo", () => {
  it("Should render CounterTwo", () => {
    render(<CounterTwo count={0} />);
    const countElement = screen.getByRole("heading", { level: 2 });
    expect(countElement).toBeInTheDocument();

    const headerElement = screen.getByRole("heading", {
      level: 1,
      name: /CounterTwo/i,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("Should call increment and decrement functions", () => {
    render(
      <CounterTwo
        count={0}
        handleIncrement={mockHandleIncrement}
        handleDecrement={mockHandleDecrement}
      />
    );

    const incrementBtn = screen.getByRole("button", { name: /Increment/i });
    const decrementBtn = screen.getByRole("button", { name: /Decrement/i });
    userEvent.click(incrementBtn);
    expect(mockHandleIncrement).toBeCalled();
    userEvent.click(decrementBtn);
    expect(mockHandleDecrement).toBeCalled();
  });
});
