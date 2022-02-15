import { ChartsForm } from "../ChartsForm";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  return render(
    <ChartsForm
      open={open}
      onSubmit={onSubmit}
      handleClose={handleClose}
      setNewCategory={setNewCategory}
    />
  );
};

const renderComponentAsync = async () => {
  await act(
    async () =>
      await render(
        <ChartsForm
          open={open}
          onSubmit={onSubmit}
          handleClose={handleClose}
          setNewCategory={setNewCategory}
        />
      )
  );
};

const open = true;
const onSubmit = jest.fn();
const handleClose = jest.fn();
const setNewCategory = jest.fn();

describe("ChartsForm component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderComponent();
    });

    it("the title", () => {
      expect(
        screen.getByRole("heading", { name: /create a new category/i })
      ).toBeInTheDocument();
    });

    it('an input with name="title"', () => {
      expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    });

    it('an input with name="description"', () => {
      expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    });

    it('a button "Add record"', () => {
      expect(
        screen.getByRole("button", { name: /add category/i })
      ).toBeInTheDocument();
    });

    it('a button "Close"', () => {
      expect(
        screen.getByRole("button", { name: /close/i })
      ).toBeInTheDocument();
    });

    it("error message when submitting a form with empty inputs", async () => {
      expect(screen.queryByText(/title is required/i)).toBeNull();
      expect(screen.queryByText(/description is required/i)).toBeNull();

      userEvent.click(screen.getByRole("button", { name: /add category/i }));

      await renderComponentAsync();

      expect(screen.getByText(/title is required/i)).toBeInTheDocument();
      expect(screen.getByText(/description is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    await renderComponentAsync();

    userEvent.type(screen.getByLabelText(/title/i), "Work");
    userEvent.type(
      screen.getByLabelText(/description/i),
      "Create new category"
    );

    userEvent.click(screen.getByRole("button", { name: /add category/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        title: "Work",
        description: "Create new category",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
