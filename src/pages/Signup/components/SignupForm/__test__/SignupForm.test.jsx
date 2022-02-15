import { act, render, screen, waitFor } from "@testing-library/react";
import { SignupForm } from "../SignupForm";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const renderWithRouter = () => {
  return render(
    <BrowserRouter>
      <SignupForm onSubmit={onSubmit} userRegistration={userRegistration} />
    </BrowserRouter>
  );
};

const renderWithRouterAsync = async () => {
  await act(async () => {
    await render(
      <BrowserRouter>
        <SignupForm onSubmit={onSubmit} userRegistration={userRegistration} />
      </BrowserRouter>
    );
  });
};

const onSubmit = jest.fn();
const userRegistration = jest.fn();

describe("Sign un component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderWithRouter();
    expect(baseElement).toMatchSnapshot();
  });

  beforeEach(async () => {
    await renderWithRouterAsync();
  });

  describe("should render", () => {
    it("an input with name='firstName'", () => {
      expect(
        screen.getByRole("textbox", { name: /first name/i })
      ).toBeInTheDocument();
    });

    it("an input with name='lastName'", () => {
      expect(
        screen.getByRole("textbox", { name: /last name/i })
      ).toBeInTheDocument();
    });

    it("an input with name='email'", () => {
      expect(
        screen.getByRole("textbox", { name: /email/i })
      ).toBeInTheDocument();
    });

    it("an input with name='password'", () => {
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("a button 'Sing up'", () => {
      expect(
        screen.getByRole("button", { name: /sign up/i })
      ).toBeInTheDocument();
    });

    it("should render error when input values are empty", async () => {
      expect(screen.queryByText(/first name is required/i)).toBeNull();
      expect(screen.queryByText(/last name is required/i)).toBeNull();
      expect(screen.queryByText(/email is required/i)).toBeNull();
      expect(screen.queryByText(/password is required/i)).toBeNull();

      userEvent.type(screen.getByRole("textbox", { name: /first name/i }), "");
      userEvent.type(screen.getByRole("textbox", { name: /last name/i }), "");
      userEvent.type(screen.getByRole("textbox", { name: /email/i }), "");
      userEvent.type(screen.getByLabelText(/password/i), "");

      userEvent.click(screen.getByRole("button", { name: /sign up/i }));

      await renderWithRouterAsync();

      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    userEvent.type(
      screen.getByRole("textbox", { name: /first name/i }),
      "Vadim"
    );
    userEvent.type(
      screen.getByRole("textbox", { name: /last name/i }),
      "Samitashvili"
    );
    userEvent.type(
      screen.getByRole("textbox", { name: /email/i }),
      "totalgol2015@gmail.com"
    );
    userEvent.type(screen.getByLabelText(/password/i), "v4d1kRed2k");

    userEvent.click(screen.getByRole("button", { name: /sign up/i }));

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
