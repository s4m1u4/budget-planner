import { Charts } from "../Charts";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CATEGORIES, RECORDS } from "./__mock__";

const renderComponent = () => {
  return render(
    <Charts
      records={RECORDS}
      categories={CATEGORIES}
      deleteCategory={deleteCategory}
      setNewCategory={setNewCategory}
    />
  );
};

const deleteCategory = jest.fn();
const setNewCategory = jest.fn();

describe("Charts component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderComponent();
    });

    it("the title", () => {
      expect(screen.getByText(/charts/i)).toBeInTheDocument();
    });
  });

  describe('modal "Create a new category"', () => {
    it("should open", () => {
      const { container } = renderComponent();
      const buttonOpenModal = container.querySelector(
        '[data-modal="modal-create"]'
      );

      userEvent.click(buttonOpenModal);

      expect(
        screen.getByRole("heading", { name: /create a new category/i })
      ).toBeInTheDocument();
    });

    it("should close", () => {
      const { container } = renderComponent();
      const buttonOpenModal = container.querySelector(
        '[data-modal="modal-create"]'
      );

      userEvent.click(buttonOpenModal);

      expect(
        screen.getByRole("heading", { name: /create a new category/i })
      ).toBeInTheDocument();

      userEvent.click(screen.getByRole("button", { name: /close/i }));

      expect(
        screen.queryByRole("heading", { name: /create a new category/i })
      ).not.toBeInTheDocument();
    });
  });

  describe('modal "Delete category"', () => {
    it("should open", () => {
      const { container } = renderComponent();
      const buttonOpenModal = container.querySelector(
        '[data-modal="modal-delete"]'
      );

      userEvent.click(buttonOpenModal);

      expect(
        screen.getByRole("heading", {
          name: /delete category/i,
        })
      ).toBeInTheDocument();
    });

    it("should close", () => {
      const { container } = renderComponent();
      const buttonOpenModal = container.querySelector(
        '[data-modal="modal-delete"]'
      );

      userEvent.click(buttonOpenModal);

      expect(
        screen.getByRole("heading", {
          name: /delete category/i,
        })
      ).toBeInTheDocument();

      userEvent.click(screen.getByRole("button", { name: /close/i }));

      expect(
        screen.queryByRole("heading", { name: /delete category/i })
      ).not.toBeInTheDocument();
    });
  });

  describe("render charts", () => {
    it("on click button 'Charts pie'", () => {
      const { container } = renderComponent();
      const buttonPieCharts = container.querySelector(
        '[data-charts="charts-pie"]'
      );

      userEvent.click(buttonPieCharts);

      expect(screen.getByText(/income/i)).toBeInTheDocument();
    });

    it("on click button 'Charts bar'", () => {
      const { container } = renderComponent();
      const buttonPieCharts = container.querySelector(
        '[data-charts="charts-bar"]'
      );

      userEvent.click(buttonPieCharts);

      expect(screen.queryByText(/income/i)).not.toBeInTheDocument();
    });
  });
});
