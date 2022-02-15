import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { PasswordModal } from "../PasswordModal";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  return render(
    <PasswordModal
      open={open}
      onSubmit={onSubmit}
      handleClose={handleClose}
      setNewPassword={setNewPassword}
    />
  );
};

export const renderComponentAsync = async () => {
  await act(
    async () =>
      await render(
        <PasswordModal
          open={open}
          onSubmit={onSubmit}
          handleClose={handleClose}
          setNewPassword={setNewPassword}
        />
      )
  );
};

const open = true;
const onSubmit = jest.fn();
const handleClose = jest.fn();
const setNewPassword = jest.fn();

describe("Password modal component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  beforeEach(() => {
    renderComponent();
  });

  describe("should render", () => {
    it("a title", () => {
      expect(screen.getByText(/Create a new password/i)).toBeInTheDocument();
    });

    it("an input with name='password'", () => {
      expect(screen.getByLabelText("Password")).toHaveAttribute(
        "name",
        "password"
      );
    });

    it("an input with name='repeatedPassword'", () => {
      expect(screen.getByLabelText("Repeat password")).toHaveAttribute(
        "name",
        "repeatedPassword"
      );
    });

    it('a button "Change', () => {
      expect(
        screen.getByRole("button", { name: /Change/i })
      ).toBeInTheDocument();
    });

    it('a button "Cancel', () => {
      expect(
        screen.getByRole("button", { name: /Cancel/i })
      ).toBeInTheDocument();
    });

    it("error message when submitting a form with empty inputs", async () => {
      expect(screen.queryByText("Password is required")).toBeNull();
      expect(screen.queryByText("Repeat password is required")).toBeNull();
      fireEvent.click(screen.getByRole("button", { name: /Change/i }));
      await renderComponentAsync();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
      expect(
        screen.getByText("Repeat password is required")
      ).toBeInTheDocument();
    });

    it("error message when entered a short password", async () => {
      expect(
        screen.queryByText("Password must be at least 6 characters")
      ).toBeNull();
      userEvent.type(screen.getByLabelText("Password"), "v4d1k");
      fireEvent.click(screen.getByRole("button", { name: /Change/i }));
      await renderComponentAsync();
      expect(
        screen.getByText("Password must be at least 6 characters")
      ).toBeInTheDocument();
    });

    it("error message when passwords don't match", async () => {
      expect(screen.queryByText("Passwords must match")).toBeNull();
      userEvent.type(screen.getByLabelText("Password"), "v4d1k");
      userEvent.type(screen.getByLabelText("Repeat password"), "v4d1kU4");
      fireEvent.click(screen.getByRole("button", { name: /Change/i }));
      await renderComponentAsync();
      expect(screen.getByText("Passwords must match")).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    userEvent.type(screen.getByLabelText("Password"), "v4d1kU4");
    userEvent.type(screen.getByLabelText("Repeat password"), "v4d1kU4");

    userEvent.click(screen.getByRole("button", { name: /Change/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        password: "v4d1kU4",
        repeatedPassword: "v4d1kU4",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Password")).toHaveValue("");
    expect(screen.getByLabelText("Repeat password")).toHaveValue("");
  });
});
