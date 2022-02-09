import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { EditMode } from "./EditMode";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn().mockImplementationOnce((cb) => cb(null, true));
const navigate = jest.fn().mockImplementationOnce((cb) => cb(null, true));
const setUserData = jest.fn();
const setNewUserData = jest.fn();
const setNewPassword = jest.fn();
const editMode = "editMode";
const userData = {
  firstName: "Vadym",
  lastName: "Samitashvili",
  email: "totalgol2015@gmail.com",
};

const getInputFirstName = () => screen.getByLabelText("First name");
const getInputLastName = () => screen.getByLabelText("Last name");
const getInputEmail = () => screen.getByLabelText("Email");
const getButtonChangePassword = () =>
  screen.getByRole("button", { name: /Change password/i });
const getButtonEdit = () => screen.getByRole("button", { name: /Edit/i });
const getButtonSave = () => screen.getByRole("button", { name: /Save/i });
const getButtonCancel = () => screen.getByRole("button", { name: /Cancel/i });

const renderComponentWithEditMode = async () => {
  await act(
    async () =>
      await render(
        <EditMode
          onSubmit={onSubmit}
          editMode={editMode}
          userData={userData}
          navigate={navigate}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      )
  );
};

describe("Edit mode component", () => {
  describe("regular mode", () => {
    it("make snapshot", () => {
      const { baseElement } = render(
        <EditMode
          onSubmit={onSubmit}
          userData={userData}
          navigate={navigate}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      );

      expect(baseElement).toMatchSnapshot();
    });

    beforeEach(() => {
      render(
        <EditMode
          onSubmit={onSubmit}
          userData={userData}
          navigate={navigate}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      );
    });

    describe("should render", () => {
      it("an input with name='firstName'", () => {
        expect(getInputFirstName()).toHaveAttribute("name", "firstName");
      });

      it("an input with name='lastName'", () => {
        expect(getInputLastName()).toHaveAttribute("name", "lastName");
      });

      it("an input with name='email'", () => {
        expect(getInputEmail()).toHaveAttribute("name", "email");
      });

      it('a button "Change password"', () => {
        expect(getButtonChangePassword()).toBeInTheDocument();
      });

      it('a button "Edit"', () => {
        expect(getButtonEdit()).toBeInTheDocument();
      });
    });

    describe('modal "Create a new password"', () => {
      it("should open", () => {
        userEvent.click(getButtonChangePassword());
        expect(screen.getByText("Create a new password")).toBeInTheDocument();
      });

      it("should close", () => {
        userEvent.click(getButtonChangePassword());
        expect(screen.getByText("Create a new password")).toBeInTheDocument();
        userEvent.click(getButtonCancel());
        expect(screen.queryByText("Create a new password")).toBeNull();
      });
    });

    it("should go to page 'Edit mode'", () => {
      userEvent.click(getButtonEdit());
      render(
        <EditMode
          onSubmit={onSubmit}
          userData={userData}
          navigate={navigate}
          editMode={editMode}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      );
      expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    });
  });

  describe("edit mode", () => {
    it("make snapshot", () => {
      const { baseElement } = render(
        <EditMode
          onSubmit={onSubmit}
          editMode={editMode}
          userData={userData}
          navigate={navigate}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      );

      expect(baseElement).toMatchSnapshot();
    });

    beforeEach(() => {
      render(
        <EditMode
          onSubmit={onSubmit}
          editMode={editMode}
          userData={userData}
          navigate={navigate}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      );
    });

    describe("should render", () => {
      it('a button "Change password"', () => {
        expect(getButtonSave()).toBeInTheDocument();
      });

      it('a button "Cancel"', () => {
        expect(getButtonCancel()).toBeInTheDocument();
      });

      it("error message when submitting a form with empty inputs", async () => {
        expect(screen.queryByText("First name is required")).toBeNull();
        expect(screen.queryByText("Last name is required")).toBeNull();
        expect(screen.queryByText("Email is required")).toBeNull();
        fireEvent.change(getInputFirstName(), { target: { value: "" } });
        fireEvent.change(getInputLastName(), { target: { value: "" } });
        fireEvent.change(getInputEmail(), { target: { value: "" } });
        fireEvent.click(getButtonSave());
        await renderComponentWithEditMode();
        expect(screen.getByText("First name is required")).toBeInTheDocument();
        expect(screen.getByText("Last name is required")).toBeInTheDocument();
        expect(screen.getByText("Email is required")).toBeInTheDocument();
      });
    });

    it("should go to page 'Regular mode'", () => {
      userEvent.click(getButtonCancel());
      render(
        <EditMode
          onSubmit={onSubmit}
          userData={userData}
          navigate={navigate}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      );
      expect(screen.getByText(/edit/i)).toBeInTheDocument();
    });

    it("successful form submission", async () => {
      fireEvent.change(getInputFirstName(), { target: { value: "Vadik" } });
      fireEvent.change(getInputLastName(), {
        target: { value: "Samitashvili" },
      });
      fireEvent.change(getInputEmail(), {
        target: { value: "totalgol2014@gmail.com" },
      });

      fireEvent.click(getButtonSave());

      await waitFor(() =>
        expect(onSubmit).toHaveBeenCalledWith({
          firstName: "Vadik",
          lastName: "Samitashvili",
          email: "totalgol2014@gmail.com",
        })
      );

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
