import { FiltersSection } from "../FiltersSection";
import { render, screen } from "@testing-library/react";
import { CATEGORIES } from "./__mock__";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  return render(
    <FiltersSection
      setPage={setPage}
      filters={filters}
      setFilters={setFilters}
      categories={CATEGORIES}
      getHistories={getHistories}
      getFilteredHistories={getFilteredHistories}
    />
  );
};

const setPage = jest.fn();
const setFilters = jest.fn();
const getHistories = jest.fn();
const getFilteredHistories = jest.fn();
const filters = { type: "expense", category: "" };

describe("Filters section component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderComponent();
    });

    it("a head", () => {
      expect(screen.getByText(/filters/i)).toBeInTheDocument();
    });

    it('a button "Type"', () => {
      expect(
        screen.getByRole("button", {
          name: /type/i,
        })
      ).toBeInTheDocument();
    });

    it('a button "Category"', () => {
      expect(
        screen.getByRole("button", {
          name: /category/i,
        })
      ).toBeInTheDocument();
    });

    it('a button "Search"', () => {
      expect(
        screen.getByRole("button", {
          name: /search/i,
        })
      ).toBeInTheDocument();
    });

    it('a button "Reset"', () => {
      expect(
        screen.getByRole("button", {
          name: /reset/i,
        })
      ).toBeInTheDocument();
    });
  });

  describe("should change", () => {
    beforeEach(() => {
      renderComponent();
    });

    it("type options", () => {
      userEvent.click(
        screen.getByRole("button", {
          name: /type/i,
        })
      );

      userEvent.click(screen.getByText(/income/i));
    });

    it("category options", () => {
      userEvent.click(
        screen.getByRole("button", {
          name: /category/i,
        })
      );

      userEvent.click(screen.getByText(/work/i));
    });
  });

  describe("should be", () => {
    beforeEach(() => {
      renderComponent();
    });

    it("search records", () => {
      userEvent.click(
        screen.getByRole("button", {
          name: /type/i,
        })
      );

      userEvent.click(screen.getByText(/income/i));

      userEvent.click(screen.getByRole("button", { name: /search/i }));
    });

    it("reset records", () => {
      userEvent.click(
        screen.getByRole("button", {
          name: /type/i,
        })
      );

      userEvent.click(screen.getByText(/income/i));

      userEvent.click(screen.getByRole("button", { name: /reset/i }));
    });
  });
});
