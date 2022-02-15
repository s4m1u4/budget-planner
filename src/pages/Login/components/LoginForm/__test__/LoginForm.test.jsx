import { LoginForm } from "../LoginForm";
import { BrowserRouter } from "react-router-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const renderWithRouter = () => {
  return render(
    <BrowserRouter>
      <LoginForm onSubmit={onSubmit} userAuthentication={userAuthentication} />
    </BrowserRouter>
  );
};

const renderWithRouterAsync = async () => {
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

const onSubmit = jest.fn();
const userAuthentication = jest.fn();

describe("Log in form component", () => {
  it("snapshot matching", async () => {
    const { baseElement } = renderWithRouter();
    expect(baseElement).toMatchSnapshot();
  });

  beforeEach(async () => {
    await renderWithRouterAsync();
  });

  describe("should render", () => {
    it("an input with name='email'", () => {
      expect(
        screen.getByRole("textbox", { name: /email/i })
      ).toBeInTheDocument();
    });

    it("an input with name='password'", () => {
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it("a button 'Sing in'", () => {
      expect(
        screen.getByRole("button", { name: /sign in/i })
      ).toBeInTheDocument();
    });

    it("error when input values are empty", async () => {
      expect(screen.queryByText(/email is required/i)).toBeNull();
      expect(screen.queryByText(/password is required/i)).toBeNull();

      userEvent.type(screen.getByRole("textbox", { name: /email/i }), "");
      userEvent.type(screen.getByLabelText(/password/i), "");

      userEvent.click(screen.getByRole("button", { name: /sign in/i }));

      await renderWithRouterAsync();

      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    userEvent.type(
      screen.getByRole("textbox", { name: /email/i }),
      "totalgol2015@gmail.com"
    );
    userEvent.type(screen.getByLabelText(/password/i), "v4d1kRed2k");

    userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        email: "totalgol2015@gmail.com",
        password: "v4d1kRed2k",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
