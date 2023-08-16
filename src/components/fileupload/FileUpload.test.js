import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("File Upload", () => {
  test("upload file", async () => {
    render(
      <div>
        <label htmlFor="file-uploader">Upload file:</label>
        <input id="file-uploader" type="file" />
      </div>
    );
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input = screen.getByLabelText(/upload file/i);
    userEvent.upload(input, file);
    expect(input.files[0]).toBe(file);
    expect(input.files.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);
  });
});
