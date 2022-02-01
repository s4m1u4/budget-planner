import { AvatarModal } from "./AvatarModal";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const open = true;
const onSubmit = jest.fn();
const handleClose = jest.fn();
const setUserData = jest.fn();
const getUserData = jest.fn();
const setNewAvatar = jest.fn();

const renderComponent = async () => {
  await act(
    async () =>
      await render(
        <AvatarModal
          open={open}
          setNewAvatar={setNewAvatar}
          handleClose={handleClose}
          onSubmit={onSubmit}
          getUserData={getUserData}
          setUserData={setUserData}
        />
      )
  );
};

describe("Avatar modal component", () => {
  beforeEach(() => {
    render(
      <AvatarModal
        open={open}
        setNewAvatar={setNewAvatar}
        handleClose={handleClose}
        onSubmit={onSubmit}
        getUserData={getUserData}
        setUserData={setUserData}
      />
    );
  });

  it("should render a title", () => {
    expect(getTitle()).toBeInTheDocument();
  });

  it("should render an input with name='avatar'", () => {
    expect(getInputAvatar()).toHaveAttribute("name", "avatar");
  });

  it('should render a button "Change', () => {
    expect(getButtonChange()).toBeInTheDocument();
  });

  it('should render a button "Cancel', () => {
    expect(getButtonCancel()).toBeInTheDocument();
  });

  it("should render error message when input value is empty and focus disappeared", async () => {
    expect(screen.queryByText(/Avatar is requred/i)).toBeNull();
    fireEvent.focus(getInputAvatar());
    fireEvent.blur(getInputAvatar());
    await renderComponent();
    expect(screen.getByText(/Avatar is required/i)).toBeInTheDocument();
  });

  it("should render error message when submitting a form with empty input", async () => {
    expect(screen.queryByText(/Avatar is requred/i)).toBeNull();
    fireEvent.click(getButtonChange());
    await renderComponent();
    expect(screen.getByText(/Avatar is required/i)).toBeInTheDocument();
  });

  it("successful form submission", async () => {
    userEvent.type(
      getInputAvatar(),
      "https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300"
    );

    userEvent.click(getButtonChange());

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        avatar:
          "https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(getInputAvatar()).toHaveValue("");
  });
});

const getTitle = () => screen.getByText(/Set a new avatar/i);
const getInputAvatar = () => screen.getByRole("textbox");
const getButtonChange = () => screen.getByRole("button", { name: /Change/i });
const getButtonCancel = () => screen.getByRole("button", { name: /Cancel/i });
