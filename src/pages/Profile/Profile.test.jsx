import axios from "axios";
import { Provider } from "mobx-react";
import { RootStore } from "../../store/RootStore";
import { ProfileContainer } from "./ProfileContainer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const renderWithStoreAndRouter = (Element, initialEntries) => {
  const rootStore = new RootStore();

  return render(
    <Provider rootStore={rootStore}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/profile/" element={Element} />
          <Route path="/profile/:editMode" element={Element} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("Profile", () => {
  beforeEach(() => {
    renderWithStoreAndRouter(<ProfileContainer />, ["/profile"]);
  });

  it("should be changed to edit mode", () => {
    expect(getButtonSave()).not.toBeInTheDocument();
    expect(getButtonCancel()).not.toBeInTheDocument();

    userEvent.click(getButtonEdit());

    expect(getButtonSave()).toBeInTheDocument();
    expect(getButtonCancel()).toBeInTheDocument();
  });

  it("should render a title", async () => {
    expect(getTitle()).toBeInTheDocument();
  });

  it('should render a button "Change avatar"', () => {
    expect(getButtonChangeAvatar()).toBeInTheDocument();
  });

  it('should open a modal "Set new avatar"', () => {
    userEvent.click(getButtonChangeAvatar());
    expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
  });

  it('should close a modal "Set new avatar"', async () => {
    userEvent.click(getButtonChangeAvatar());
    expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
    userEvent.click(getButtonCancel());
    expect(screen.queryByText("Set a new avatar")).toBeNull();
  });
});

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
