import { render, screen } from "../../../test-utils";
import { Users } from "./Users";

describe("Users component", () => {
  it("Should render Users component", async () => {
    render(<Users />);
    const headerElement = screen.getByRole("heading", { name: /Users/i });
    expect(headerElement).toBeInTheDocument();
    const textElement = await screen.findAllByRole("listitem");
    expect(textElement).toHaveLength(3);
  });
});
