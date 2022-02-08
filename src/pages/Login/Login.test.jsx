import { Provider } from "mobx-react";
import { SignupContainer } from "../Signup";
import { LoginContainer } from "./LoginContainer";
import { RootStore } from "../../store/RootStore";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const renderWithStoreAndRouter = (initialEntries) => {
  const rootStore = new RootStore();

  return render(
    <Provider rootStore={rootStore}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/signup" element={<SignupContainer />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("Log in page", () => {
  beforeEach(() => {
    renderWithStoreAndRouter(["/login"]);
  });

  it("should render the title", () => {
    expect(getTitle()).toBeInTheDocument();
  });

  it("should have link to 'Sing up page'", () => {
    expect(getLinkToSignUp()).toBeInTheDocument();
  });

  it("should be changed to the 'Sign up page'", () => {
    expect(getButtonSignUp()).not.toBeInTheDocument();

    userEvent.click(getLinkToSignUp());

    expect(getButtonSignUp()).toBeInTheDocument();
  });
});

const getTitle = () =>
  screen.getByRole("heading", {
    name: /sign in/i,
  });
const getLinkToSignUp = () =>
  screen.getByRole("link", {
    name: /create an account/i,
  });
const getButtonSignUp = () =>
  screen.queryByRole("button", {
    name: /sign up/i,
  });
