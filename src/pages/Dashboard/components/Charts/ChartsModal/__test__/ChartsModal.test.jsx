import { ChartsModal } from "../ChartsModal";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CATEGORIES } from "./__mock__";

const renderComponent = () => {
  return render(
    <ChartsModal
      open={open}
      onSubmit={onSubmit}
      categories={CATEGORIES}
      handleClose={handleClose}
      deleteCategory={deleteCategory}
    />
  );
};

const renderComponentAsync = async () => {
  await act(
    async () =>
      await render(
        <ChartsModal
          open={open}
          onSubmit={onSubmit}
          categories={CATEGORIES}
          handleClose={handleClose}
          deleteCategory={deleteCategory}
        />
      )
  );
};

const open = true;
const onSubmit = jest.fn();
const handleClose = jest.fn();
const deleteCategory = jest.fn();

describe("ChartsModal component", () => {
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
        screen.getByRole("heading", { name: /delete category/i })
      ).toBeInTheDocument();
    });

    it('an input with name="category"', () => {
      expect(
        screen.getByRole("button", { name: /category ​/i })
      ).toBeInTheDocument();
    });

    it('a button "Delete category"', () => {
      expect(
        screen.getByRole("button", { name: /delete category/i })
      ).toBeInTheDocument();
    });

    it('a button "Close"', () => {
      expect(
        screen.getByRole("button", { name: /close/i })
      ).toBeInTheDocument();
    });

    it("error message when submitting a form with empty inputs", async () => {
      expect(screen.queryByText(/category is required/i)).toBeNull();

      userEvent.click(screen.getByRole("button", { name: /delete category/i }));

      await renderComponentAsync();

      expect(screen.getByText(/category is required/i)).toBeInTheDocument();
    });
  });

  it("successful form submission", async () => {
    await renderComponentAsync();

    userEvent.click(screen.getByRole("button", { name: /category ​/i }));
    userEvent.click(screen.getByRole("option", { name: /work/i }));

    userEvent.click(screen.getByRole("button", { name: /delete category/i }));

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        id: "084a3558-6b14-4e38-9d24-47e912021384",
      })
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
