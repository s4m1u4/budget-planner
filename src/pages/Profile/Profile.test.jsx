// import axios from "axios";
// import userEvent from "@testing-library/user-event";
import mockAxios from "jest-mock-axios";
import { Provider } from "mobx-react";
import { RootStore } from "../../store/RootStore";
import { ProfileContainer } from "./ProfileContainer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// jest.mock("axios");

const renderWithStoreAndRouter = (Element, initialEntries) => {
  const rootStore = new RootStore();

  render(
    <Provider rootStore={rootStore}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/profile" element={Element} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};

describe("Profile", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  // beforeEach(() => {
  //   renderWithStoreAndRouter(<ProfileContainer />, ["/profile"]);
  // });

  it("render with router and provider", async () => {
    // const data = {
    //   id: "dw8a-h332d-ha12-kb00",
    //   firstName: "Vadim",
    //   lastName: "Samitashvili",
    //   email: "totalgol2015@gmail.com",
    //   avatar: "test.png",
    //   budgetAmount: "1000",
    // };
    const result = await mockAxios.mockResponse({ data: "test" });
    console.log("RESULT", result);
    // renderWithStoreAndRouter(<ProfileContainer />, ["/profile"]);
    // expect(result).toEqual(data);
    // screen.debug();
  });

  // it("should render a title", async () => {
  //   expect(getTitle()).toBeInTheDocument();
  // });
  //
  // it('should render a button "Change avatar"', () => {
  //   expect(getButtonChangeAvatar()).toBeInTheDocument();
  // });
  //
  // it('should open a modal "Set new avatar"', () => {
  //   userEvent.click(getButtonChangeAvatar());
  //   expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
  // });
  //
  // it('should close a modal "Set new avatar"', async () => {
  //   userEvent.click(getButtonChangeAvatar());
  //   expect(screen.getByText("Set a new avatar")).toBeInTheDocument();
  //   userEvent.click(getButtonCancel());
  //   expect(screen.queryByText("Set a new avatar")).toBeNull();
  // });
});

// const getTitle = () => screen.getByText(/Profile page/i);
// const getButtonChangeAvatar = () =>
//   screen.getByRole("button", {
//     name: /change avatar/i,
//   });
// const getButtonCancel = () => screen.getByRole("button", { name: /Cancel/i });
