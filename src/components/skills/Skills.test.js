/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import Skills from "./Skills";

const skillSet = ["Java", "Python"];
describe("Skills", () => {
  it("should have list item", () => {
    render(<Skills skills={skillSet} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("Should have multiple list items", () => {
    render(<Skills skills={skillSet} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skillSet.length);
  });

  it("Should render login button", () => {
    render(<Skills skills={skillSet} />);
    const buttonElement = screen.getByRole("button", { name: /Login/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should not render start learning button", () => {
    render(<Skills skills={skillSet} />);
    const buttonElement = screen.queryByRole("button", {
      name: /Start learning/i,
    });
    expect(buttonElement).not.toBeInTheDocument();
  });

  //  Note queryBy returns null if no element found, returns error if more than one element found
  it("Should render Start learning button on click", () => {
    render(<Skills skills={skillSet} />);
    const buttonElement = screen.getByRole("button", { name: /Login/i });
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/Start learning/i);
  });

  it("Should get start learning button after some timeout", async () => {
    // render(<Skills skills={skillSet} />);
    const view = render(<Skills skills={skillSet} />);
    // logRoles(view.container);
    // screen.debug();
    const buttonElement = await screen.findByRole(
      "button",
      {
        name: /Start Learning/i,
      },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(buttonElement).toBeInTheDocument();
  });
});
