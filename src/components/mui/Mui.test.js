import { render, screen } from "../../../test-utils";
import { MuiMode } from "./Mui";

describe.only("App provider", () => {
  it("Should render AppProvider with Mui", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading", { name: /dark mode/i });
    expect(headingElement).toBeInTheDocument();
  });
});
