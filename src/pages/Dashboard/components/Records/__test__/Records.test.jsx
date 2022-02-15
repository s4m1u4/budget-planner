import { Records } from "../Records";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CATEGORIES, LAST_RECORDS } from "./__mock__";

const renderComponent = (lastRecords) => {
  return render(
    <Records
      categories={CATEGORIES}
      lastRecords={lastRecords}
      setNewHistory={setNewHistory}
    />
  );
};

const setNewHistory = jest.fn();

describe("Records component", () => {
  describe("with empty records", () => {
    it("snapshot matching", () => {
      const { baseElement } = renderComponent([]);
      expect(baseElement).toMatchSnapshot();
    });

    describe("should render", () => {
      beforeEach(() => {
        renderComponent([]);
      });

      it("the title", () => {
        expect(
          screen.getByRole("heading", { name: /last records/i })
        ).toBeInTheDocument();
      });

      it("the text 'Records list is empty'", () => {
        expect(screen.getByText(/records list is empty/i)).toBeInTheDocument();
      });
    });
  });

  describe("with list of records", () => {
    it("snapshot matching", () => {
      const { baseElement } = renderComponent(LAST_RECORDS);
      expect(baseElement).toMatchSnapshot();
    });

    describe('modal "Create a new record"', () => {
      it("should open", () => {
        const { container } = renderComponent(LAST_RECORDS);
        const buttonOpenModal = container.querySelector('[data-modal="modal"]');

        userEvent.click(buttonOpenModal);

        expect(
          screen.getByRole("heading", { name: /create a new record/i })
        ).toBeInTheDocument();
      });

      it("should close", () => {
        const { container } = renderComponent(LAST_RECORDS);
        const buttonOpenModal = container.querySelector('[data-modal="modal"]');

        userEvent.click(buttonOpenModal);

        expect(
          screen.getByRole("heading", { name: /create a new record/i })
        ).toBeInTheDocument();

        userEvent.click(screen.getByRole("button", { name: /close/i }));

        expect(
          screen.queryByRole("heading", { name: /create a new record/i })
        ).not.toBeInTheDocument();
      });
    });
  });
});
