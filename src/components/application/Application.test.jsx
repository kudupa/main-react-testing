import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  it("Should render correctly", () => {
    render(<Application />);
    const textElement = screen.getByLabelText(/Name/i); // second method given below
    expect(textElement).toBeInTheDocument();
    // Note getByLabel text can accept options as well in case if two elements has same name

    const addressElement = screen.getByRole("textbox", { name: /Address/i });
    expect(addressElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const agreeElement = screen.getByText(/I agree to the terms and/i);
    expect(agreeElement).toBeInTheDocument();

    const submitBtn = screen.getByRole("button", { name: "Submit" });
    expect(submitBtn).toBeInTheDocument();

    const formHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(formHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const jobElement = screen.getByText(/sub/i, { exact: false });
    expect(jobElement).toBeInTheDocument();

    const subElement = screen.getByText((content) => content.startsWith("Sub"));
    expect(subElement).toBeInTheDocument();

    const disabledButton = screen.getByRole("button", { name: "Disable" });
    expect(disabledButton).toBeDisabled()
  });
});
