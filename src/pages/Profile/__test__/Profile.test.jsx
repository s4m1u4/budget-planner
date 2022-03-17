import axios from "axios";
import { ProfileContainer } from "../ProfileContainer";
import { Provider } from "mobx-react";
import { render, screen } from "@testing-library/react";
import { RootStore } from "src/store/RootStore";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const renderWithStoreAndRouter = (initialEntries) => {
  const rootStore = new RootStore();

  return render(
    <Provider rootStore={rootStore}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/profile/:editMode" element={<ProfileContainer />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

jest.mock("axios");

describe("Profile page", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderWithStoreAndRouter(["/profile"]);
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderWithStoreAndRouter(["/profile"]);
    });

    it("a title", async () => {
      expect(screen.getByText(/Profile page/i)).toBeInTheDocument();
    });

    it('a button "Change avatar"', () => {
      expect(
        screen.getByRole("button", { name: /change avatar/i })
      ).toBeInTheDocument();
    });
  });

  describe('modal "Set new avatar"', () => {
    beforeEach(() => {
      renderWithStoreAndRouter(["/profile"]);
    });

    it("should open", () => {
      userEvent.click(screen.getByRole("button", { name: /change avatar/i }));
      expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
    });

    it("should close", () => {
      userEvent.click(screen.getByRole("button", { name: /change avatar/i }));
      expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
      userEvent.click(screen.queryByText(/cancel/i));
      expect(screen.queryByText("Set a new avatar")).toBeNull();
    });
  });

  describe("should be changed", () => {
    beforeEach(() => {
      renderWithStoreAndRouter(["/profile"]);
    });

    it("to edit mode", () => {
      expect(screen.queryByText(/save/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/cancel/i)).not.toBeInTheDocument();

      userEvent.click(screen.getByText(/edit/i));

      expect(screen.queryByText(/save/i)).toBeInTheDocument();
      expect(screen.queryByText(/cancel/i)).toBeInTheDocument();
    });
  });
});
