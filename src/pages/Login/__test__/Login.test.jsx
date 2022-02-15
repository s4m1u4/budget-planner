import { SignupContainer } from "../../Signup";
import { LoginContainer } from "../LoginContainer";
import { Provider } from "mobx-react";
import { RootStore } from "../../../store/RootStore";
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
  it("snapshot matching", () => {
    const { baseElement } = renderWithStoreAndRouter(["/login"]);
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderWithStoreAndRouter(["/login"]);
    });

    it("a title", () => {
      expect(
        screen.getByRole("heading", { name: /sign in/i })
      ).toBeInTheDocument();
    });

    it("a link to 'Sing up page'", () => {
      expect(
        screen.getByRole("link", { name: /create an account/i })
      ).toBeInTheDocument();
    });
  });

  it("should be changed to the 'Sign up page'", () => {
    renderWithStoreAndRouter(["/login"]);

    expect(
      screen.queryByRole("button", { name: /sign up/i })
    ).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: /create an account/i }));

    expect(
      screen.queryByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });
});
