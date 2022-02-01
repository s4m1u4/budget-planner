import axios from "axios";
import Profile from "./Profile";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

const params = { editMode: "editMode" };
const navigate = jest.fn();
const getUserData = () => fakeUserData;
const setNewUserData = jest.fn();
const setNewPassword = jest.fn();
const setNewAvatar = jest.fn();

const fakeUserData = {
  id: "da2d-daw2j-52fa-ha46",
  avatar:
    "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
  firstName: "Vadym",
  lastName: "Samitashvili",
  email: "totalgol2015@gmail.com",
  budgetAmount: "0.0000",
};

describe("Profile", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Profile
          params={params}
          navigate={navigate}
          getUserData={getUserData}
          setNewAvatar={setNewAvatar}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      </BrowserRouter>
    );
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
const getButtonCancel = () => screen.getByRole("button", { name: /Cancel/i });
