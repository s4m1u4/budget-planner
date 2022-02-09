import axios from "axios";
import { Provider } from "mobx-react";
import { RootStore } from "../../store/RootStore";
import { ProfileContainer } from "./ProfileContainer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const getTitle = () => screen.getByText(/Profile page/i);
const getButtonChangeAvatar = () =>
  screen.getByRole("button", {
    name: /change avatar/i,
  });
const getButtonEdit = () =>
  screen.getByRole("button", {
    name: /edit/i,
  });
const getButtonSave = () => screen.queryByText(/cancel/i);
const getButtonCancel = () => screen.queryByText(/Cancel/i);

const renderWithStoreAndRouter = (Element, initialEntries) => {
  const rootStore = new RootStore();

  return render(
    <Provider rootStore={rootStore}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/profile" element={Element} />
          <Route path="/profile/:editMode" element={Element} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("Profile page", () => {
  it("make snapshot", () => {
    const { baseElement } = renderWithStoreAndRouter(<ProfileContainer />, [
      "/profile",
    ]);

    expect(baseElement).toMatchSnapshot();
  });

  beforeEach(() => {
    renderWithStoreAndRouter(<ProfileContainer />, ["/profile"]);
  });

  describe("should render", () => {
    it("a title", async () => {
      expect(getTitle()).toBeInTheDocument();
    });

    it('a button "Change avatar"', () => {
      expect(getButtonChangeAvatar()).toBeInTheDocument();
    });
  });

  describe('modal "Set new avatar"', () => {
    it("should open", () => {
      userEvent.click(getButtonChangeAvatar());
      expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
    });

    it("should close", () => {
      userEvent.click(getButtonChangeAvatar());
      expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
      userEvent.click(getButtonCancel());
      expect(screen.queryByText("Set a new avatar")).toBeNull();
    });
  });

  it("should be changed to edit mode", () => {
    expect(getButtonSave()).not.toBeInTheDocument();
    expect(getButtonCancel()).not.toBeInTheDocument();

    userEvent.click(getButtonEdit());

    expect(getButtonSave()).toBeInTheDocument();
    expect(getButtonCancel()).toBeInTheDocument();
  });
});
