import { AvatarModal } from "../AvatarModal";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  return render(
    <AvatarModal
      open={open}
      setNewAvatar={setNewAvatar}
      handleClose={handleClose}
      onSubmit={onSubmit}
      getUserData={getUserData}
      setUserData={setUserData}
    />
  );
};

const renderComponentAsync = async () => {
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

const open = true;
const onSubmit = jest.fn();
const handleClose = jest.fn();
const setUserData = jest.fn();
const getUserData = jest.fn();
const setNewAvatar = jest.fn();

describe("Avatar modal component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  beforeEach(() => {
    renderComponent();
  });

  describe("should render", () => {
    it("a title", () => {
      expect(screen.getByText(/Set a new avatar/i)).toBeInTheDocument();
    });

    it("an input with name='avatar'", () => {
      expect(screen.getByRole("textbox")).toHaveAttribute("name", "avatar");
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

    it("error message when input value is empty and focus disappeared", async () => {
      expect(screen.queryByText(/Avatar is requred/i)).toBeNull();
      fireEvent.focus(screen.getByRole("textbox"));
      fireEvent.blur(screen.getByRole("textbox"));
      await renderComponentAsync();
      expect(screen.getByText(/Avatar is required/i)).toBeInTheDocument();
    });

    it("error message when submitting a form with empty input", async () => {
      expect(screen.queryByText(/Avatar is requred/i)).toBeNull();
      fireEvent.click(screen.getByRole("button", { name: /Change/i }));
      await renderComponentAsync();
      expect(screen.getByText(/Avatar is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    userEvent.type(
      screen.getByRole("textbox"),
      "https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300"
    );

    userEvent.click(screen.getByRole("button", { name: /Change/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        avatar:
          "https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("textbox")).toHaveValue("");
  });
});
