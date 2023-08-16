import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppProviders } from "./src/providers/AppProviders";

const AllWrapper = ({ children }) => {
  return (
    <>
      <AppProviders>{children}</AppProviders>
    </>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllWrapper, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
