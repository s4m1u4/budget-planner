import { act, render, screen, waitFor } from "@testing-library/react";
import { SignupForm } from "./SignupForm";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();
const userRegistration = jest.fn();

const getInputFisrtName = () =>
  screen.getByRole("textbox", {
    name: /first name/i,
  });
const getInputLastName = () =>
  screen.getByRole("textbox", {
    name: /last name/i,
  });
const getInputEmail = () =>
  screen.getByRole("textbox", {
    name: /email/i,
  });
const getInputPassword = () => screen.getByLabelText(/password/i);
const getButtonSignUp = () =>
  screen.getByRole("button", {
    name: /sign up/i,
  });

const renderComponent = async () => {
  await act(async () => {
    await render(
      <BrowserRouter>
        <SignupForm onSubmit={onSubmit} userRegistration={userRegistration} />
      </BrowserRouter>
    );
  });
};

describe("Sign un component", () => {
  it("make snapshot", () => {
    const { baseElement } = render(
      <BrowserRouter>
        <SignupForm onSubmit={onSubmit} userRegistration={userRegistration} />
      </BrowserRouter>
    );

    expect(baseElement).toMatchSnapshot();
  });

  beforeEach(async () => {
    await renderComponent();
  });

  describe("should render", () => {
    it("an input with name='firstName'", () => {
      expect(getInputFisrtName()).toBeInTheDocument();
    });

    it("an input with name='lastName'", () => {
      expect(getInputLastName()).toBeInTheDocument();
    });

    it("an input with name='email'", () => {
      expect(getInputEmail()).toBeInTheDocument();
    });

    it("an input with name='password'", () => {
      expect(getInputPassword()).toBeInTheDocument();
    });

    it("a button 'Sing up'", () => {
      expect(getButtonSignUp()).toBeInTheDocument();
    });

    it("should render error when input values are empty", async () => {
      expect(screen.queryByText(/first name is required/i)).toBeNull();
      expect(screen.queryByText(/last name is required/i)).toBeNull();
      expect(screen.queryByText(/email is required/i)).toBeNull();
      expect(screen.queryByText(/password is required/i)).toBeNull();

      userEvent.type(getInputFisrtName(), "");
      userEvent.type(getInputLastName(), "");
      userEvent.type(getInputEmail(), "");
      userEvent.type(getInputPassword(), "");

      userEvent.click(getButtonSignUp());

      await renderComponent();

      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    userEvent.type(getInputFisrtName(), "Vadim");
    userEvent.type(getInputLastName(), "Samitashvili");
    userEvent.type(getInputEmail(), "totalgol2015@gmail.com");
    userEvent.type(getInputPassword(), "v4d1kRed2k");

    userEvent.click(getButtonSignUp());

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        firstName: "Vadim",
        lastName: "Samitashvili",
        email: "totalgol2015@gmail.com",
        password: "v4d1kRed2k",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
