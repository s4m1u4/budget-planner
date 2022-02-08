import { Provider } from "mobx-react";
import { RootStore } from "../../store/RootStore";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { LoginContainer } from "../Login";
import { SignupContainer } from "./SignupContainer";
import userEvent from "@testing-library/user-event";

const getTitle = () =>
  screen.getByRole("heading", {
    name: /sign up/i,
  });
const getLinkToSignIn = () =>
  screen.getByRole("link", {
    name: /sign in/i,
  });
const getButtonSignIn = () =>
  screen.queryByRole("button", {
    name: /sign in/i,
  });

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

describe("Sign up page", () => {
  beforeEach(() => {
    renderWithStoreAndRouter(["/signup"]);
  });

  it("should render the title", () => {
    expect(getTitle()).toBeInTheDocument();
  });

  it("should have link to 'Log in page'", () => {
    expect(getLinkToSignIn()).toBeInTheDocument();
  });

  it("should be changed to the 'Sign in page'", () => {
    expect(getButtonSignIn()).not.toBeInTheDocument();

    userEvent.click(getLinkToSignIn());

    expect(getButtonSignIn()).toBeInTheDocument();
  });
});
