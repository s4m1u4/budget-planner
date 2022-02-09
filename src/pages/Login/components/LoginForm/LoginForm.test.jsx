import { act, render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();
const userAuthentication = jest.fn();

const getInputEmail = () =>
  screen.getByRole("textbox", {
    name: /email/i,
  });
const getInputPassword = () => screen.getByLabelText(/password/i);
const getButtonSignIn = () =>
  screen.getByRole("button", {
    name: /sign in/i,
  });

const renderComponent = async () => {
  await act(async () => {
    await render(
      <BrowserRouter>
        <LoginForm
          onSubmit={onSubmit}
          userAuthentication={userAuthentication}
        />
      </BrowserRouter>
    );
  });
};

describe("Log in form component", () => {
  it("make snapshot", async () => {
    const { baseElement } = render(
      <BrowserRouter>
        <LoginForm
          onSubmit={onSubmit}
          userAuthentication={userAuthentication}
        />
      </BrowserRouter>
    );

    expect(baseElement).toMatchSnapshot();
  });

  beforeEach(async () => {
    await renderComponent();
  });

  describe("should render", () => {
    it("an input with name='email'", () => {
      expect(getInputEmail()).toBeInTheDocument();
    });

    it("an input with name='password'", () => {
      expect(getInputPassword()).toBeInTheDocument();
    });

    it("a button 'Sing in'", () => {
      expect(getButtonSignIn()).toBeInTheDocument();
    });

    it("error when input values are empty", async () => {
      expect(screen.queryByText(/email is required/i)).toBeNull();
      expect(screen.queryByText(/password is required/i)).toBeNull();

      userEvent.type(getInputEmail(), "");
      userEvent.type(getInputPassword(), "");

      userEvent.click(getButtonSignIn());

      await renderComponent();

      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    userEvent.type(getInputEmail(), "totalgol2015@gmail.com");
    userEvent.type(getInputPassword(), "v4d1kRed2k");

    userEvent.click(getButtonSignIn());

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        email: "totalgol2015@gmail.com",
        password: "v4d1kRed2k",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
