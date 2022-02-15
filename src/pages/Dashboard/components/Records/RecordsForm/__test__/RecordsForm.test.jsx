import { RecordsForm } from "../RecordsForm";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CATEGORIES } from "./__mock__";

const renderComponent = () => {
  return render(
    <RecordsForm
      open={open}
      onSubmit={onSubmit}
      categories={CATEGORIES}
      handleClose={handleClose}
      setNewHistory={setNewHistory}
    />
  );
};

const renderComponentAsync = async () => {
  await act(
    async () =>
      await render(
        <RecordsForm
          open={open}
          onSubmit={onSubmit}
          categories={CATEGORIES}
          handleClose={handleClose}
          setNewHistory={setNewHistory}
        />
      )
  );
};

const open = true;
const onSubmit = jest.fn();
const handleClose = jest.fn();
const setNewHistory = jest.fn();

describe("RecordsForm component", () => {
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
        screen.getByRole("heading", { name: /create a new record/i })
      ).toBeInTheDocument();
    });

    it('an input with name="amount"', () => {
      expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    });

    it('an input with name="type"', () => {
      expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
    });

    it('an input with name="category"', () => {
      expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    });

    it('a button "Add record"', () => {
      expect(
        screen.getByRole("button", { name: /add record/i })
      ).toBeInTheDocument();
    });

    it('a button "Close"', () => {
      expect(
        screen.getByRole("button", { name: /close/i })
      ).toBeInTheDocument();
    });

    it("error message when submitting a form with empty inputs", async () => {
      expect(screen.queryByText(/amount is required/i)).toBeNull();
      expect(screen.queryByText(/type is required/i)).toBeNull();
      expect(screen.queryByText(/category is required/i)).toBeNull();

      userEvent.click(screen.getByRole("button", { name: /add record/i }));

      await renderComponentAsync();

      expect(screen.getByText(/amount is required/i)).toBeInTheDocument();
      expect(screen.getByText(/type is required/i)).toBeInTheDocument();
      expect(screen.getByText(/category is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    await renderComponentAsync();

    userEvent.type(screen.getByLabelText(/amount/i), "1756");
    userEvent.click(screen.getByLabelText(/type/i));
    userEvent.click(screen.getByRole("option", { name: /income/i }));
    userEvent.click(screen.getByLabelText(/category/i));
    userEvent.click(screen.getByRole("option", { name: /work/i }));

    userEvent.click(screen.getByRole("button", { name: /add record/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        amount: 1756,
        type: "income",
        category: "084a3558-6b14-4e38-9d24-47e912021384",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
