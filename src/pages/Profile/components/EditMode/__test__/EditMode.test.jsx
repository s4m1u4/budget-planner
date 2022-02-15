import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { EditMode } from "../EditMode";
import userEvent from "@testing-library/user-event";
import { EDIT_MODE, USER_DATA } from "./__mock__";

const renderComponentWithoutEditMode = () => {
  return render(
    <EditMode
      onSubmit={onSubmit}
      userData={USER_DATA}
      navigate={navigate}
      setUserData={setUserData}
      setNewUserData={setNewUserData}
      setNewPassword={setNewPassword}
    />
  );
};

const renderComponentWithEditMode = () => {
  return render(
    <EditMode
      onSubmit={onSubmit}
      editMode={EDIT_MODE}
      userData={USER_DATA}
      navigate={navigate}
      setUserData={setUserData}
      setNewUserData={setNewUserData}
      setNewPassword={setNewPassword}
    />
  );
};

const renderComponentAsync = async () => {
  await act(
    async () =>
      await render(
        <EditMode
          onSubmit={onSubmit}
          editMode={EDIT_MODE}
          userData={USER_DATA}
          navigate={navigate}
          setUserData={setUserData}
          setNewUserData={setNewUserData}
          setNewPassword={setNewPassword}
        />
      )
  );
};

const onSubmit = jest.fn().mockImplementationOnce((cb) => cb(null, true));
const navigate = jest.fn().mockImplementationOnce((cb) => cb(null, true));
const setUserData = jest.fn();
const setNewUserData = jest.fn();
const setNewPassword = jest.fn();

describe("Edit mode component", () => {
  describe("regular mode", () => {
    it("snapshot matching", () => {
      const { baseElement } = renderComponentWithoutEditMode();
      expect(baseElement).toMatchSnapshot();
    });

    beforeEach(() => {
      renderComponentWithoutEditMode();
    });

    describe("should render", () => {
      it("an input with name='firstName'", () => {
        expect(screen.getByLabelText("First name")).toHaveAttribute(
          "name",
          "firstName"
        );
      });

      it("an input with name='lastName'", () => {
        expect(screen.getByLabelText("Last name")).toHaveAttribute(
          "name",
          "lastName"
        );
      });

      it("an input with name='email'", () => {
        expect(screen.getByLabelText("Email")).toHaveAttribute("name", "email");
      });

      it('a button "Change password"', () => {
        expect(
          screen.getByRole("button", { name: /Change password/i })
        ).toBeInTheDocument();
      });

      it('a button "Edit"', () => {
        expect(
          screen.getByRole("button", { name: /Edit/i })
        ).toBeInTheDocument();
      });
    });

    describe('modal "Create a new password"', () => {
      it("should open", () => {
        userEvent.click(
          screen.getByRole("button", { name: /Change password/i })
        );
        expect(screen.getByText("Create a new password")).toBeInTheDocument();
      });

      it("should close", () => {
        userEvent.click(
          screen.getByRole("button", { name: /Change password/i })
        );
        expect(screen.getByText("Create a new password")).toBeInTheDocument();
        userEvent.click(screen.getByRole("button", { name: /Cancel/i }));
        expect(screen.queryByText("Create a new password")).toBeNull();
      });
    });

    it("should go to page 'Edit mode'", () => {
      userEvent.click(screen.getByRole("button", { name: /Edit/i }));
      renderComponentWithEditMode();
      expect(screen.getByText(/cancel/i)).toBeInTheDocument();
    });
  });

  describe("edit mode", () => {
    it("snapshot matching", () => {
      const { baseElement } = renderComponentWithEditMode();
      expect(baseElement).toMatchSnapshot();
    });

    beforeEach(() => {
      renderComponentWithEditMode();
    });

    describe("should render", () => {
      it('a button "Change password"', () => {
        expect(
          screen.getByRole("button", { name: /Save/i })
        ).toBeInTheDocument();
      });

      it('a button "Cancel"', () => {
        expect(
          screen.getByRole("button", { name: /Cancel/i })
        ).toBeInTheDocument();
      });

      it("error message when submitting a form with empty inputs", async () => {
        expect(screen.queryByText("First name is required")).toBeNull();
        expect(screen.queryByText("Last name is required")).toBeNull();
        expect(screen.queryByText("Email is required")).toBeNull();
        fireEvent.change(screen.getByLabelText("First name"), {
          target: { value: "" },
        });
        fireEvent.change(screen.getByLabelText("Last name"), {
          target: { value: "" },
        });
        fireEvent.change(screen.getByLabelText("Email"), {
          target: { value: "" },
        });
        fireEvent.click(screen.getByRole("button", { name: /Save/i }));
        await renderComponentAsync();
        expect(screen.getByText("First name is required")).toBeInTheDocument();
        expect(screen.getByText("Last name is required")).toBeInTheDocument();
        expect(screen.getByText("Email is required")).toBeInTheDocument();
      });
    });

    it("should go to page 'Regular mode'", () => {
      userEvent.click(screen.getByRole("button", { name: /Cancel/i }));
      renderComponentWithoutEditMode();
      expect(screen.getByText(/edit/i)).toBeInTheDocument();
    });

    it("successful form submission", async () => {
      fireEvent.change(screen.getByLabelText("First name"), {
        target: { value: "Vadik" },
      });
      fireEvent.change(screen.getByLabelText("Last name"), {
        target: { value: "Samitashvili" },
      });
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "totalgol2014@gmail.com" },
      });

      fireEvent.click(screen.getByRole("button", { name: /Save/i }));

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
