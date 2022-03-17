import { LoginContainer } from "../../Login";
import { SignupContainer } from "../SignupContainer";
import { Provider } from "mobx-react";
import { RootStore } from "src/store/RootStore";
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

describe("Sign up page", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderWithStoreAndRouter(["/signup"]);
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderWithStoreAndRouter(["/signup"]);
    });

    it("a title", () => {
      expect(
        screen.getByRole("heading", { name: /sign up/i })
      ).toBeInTheDocument();
    });

    it("a link to 'Log in page'", () => {
      expect(
        screen.getByRole("link", { name: /sign in/i })
      ).toBeInTheDocument();
    });
  });

  it("should be changed to the 'Sign in page'", () => {
    renderWithStoreAndRouter(["/signup"]);

    expect(
      screen.queryByRole("button", { name: /sign in/i })
    ).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: /sign in/i }));

    expect(
      screen.queryByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });
});
