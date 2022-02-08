import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { PasswordModal } from "./PasswordModal";
import userEvent from "@testing-library/user-event";

const open = true;
const onSubmit = jest.fn();
const handleClose = jest.fn();
const setNewPassword = jest.fn();

const renderComponent = async () => {
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

describe("Password modal component", () => {
  beforeEach(() => {
    render(
      <PasswordModal
        open={open}
        onSubmit={onSubmit}
        handleClose={handleClose}
        setNewPassword={setNewPassword}
      />
    );
  });

  it("should render a title", () => {
    expect(getTitle()).toBeInTheDocument();
  });

  it("should render an input with name='password'", () => {
    expect(getInputPassword()).toHaveAttribute("name", "password");
  });

  it("should render an input with name='repeatedPassword'", () => {
    expect(getInputRepeatPassword()).toHaveAttribute(
      "name",
      "repeatedPassword"
    );
  });

  it('should render a button "Change', () => {
    expect(getButtonChange()).toBeInTheDocument();
  });

  it('should render a button "Cancel', () => {
    expect(getButtonCancel()).toBeInTheDocument();
  });

  it("should render error message when submitting a form with empty inputs", async () => {
    expect(screen.queryByText("Password is required")).toBeNull();
    expect(screen.queryByText("Repeat password is required")).toBeNull();
    fireEvent.click(getButtonChange());
    await renderComponent();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
    expect(screen.getByText("Repeat password is required")).toBeInTheDocument();
  });

  it("should render error message when entered a short password", async () => {
    expect(
      screen.queryByText("Password must be at least 6 characters")
    ).toBeNull();
    userEvent.type(getInputPassword(), "v4d1k");
    fireEvent.click(getButtonChange());
    await renderComponent();
    expect(
      screen.getByText("Password must be at least 6 characters")
    ).toBeInTheDocument();
  });

  it("should render error message when passwords don't match", async () => {
    expect(screen.queryByText("Passwords must match")).toBeNull();
    userEvent.type(getInputPassword(), "v4d1k");
    userEvent.type(getInputRepeatPassword(), "v4d1kU4");
    fireEvent.click(getButtonChange());
    await renderComponent();
    expect(screen.getByText("Passwords must match")).toBeInTheDocument();
  });

  it("successful form submission", async () => {
    userEvent.type(getInputPassword(), "v4d1kU4");
    userEvent.type(getInputRepeatPassword(), "v4d1kU4");

    userEvent.click(getButtonChange());

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        password: "v4d1kU4",
        repeatedPassword: "v4d1kU4",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(getInputPassword()).toHaveValue("");
    expect(getInputRepeatPassword()).toHaveValue("");
  });
});

const getTitle = () => screen.getByText(/Create a new password/i);
const getInputPassword = () => screen.getByLabelText("Password");
const getInputRepeatPassword = () => screen.getByLabelText("Repeat password");
const getButtonChange = () => screen.getByRole("button", { name: /Change/i });
const getButtonCancel = () => screen.getByRole("button", { name: /Cancel/i });
