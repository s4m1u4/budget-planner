import { act, render, screen } from "@testing-library/react";
import { RecordsSection } from "../RecordsSection";
import { RECORDS } from "./__mock__";
import userEvent from "@testing-library/user-event";

const renderComponent = (records) => {
  return render(
    <RecordsSection
      page={page}
      limit={limit}
      setPage={setPage}
      filters={filters}
      records={records}
      getFilteredHistories={getFilteredHistories}
      deleteHistory={deleteHistory}
      deleteAllHistories={deleteAllHistories}
    />
  );
};

const renderComponentAsync = async (records) => {
  await act(async () => {
    await render(
      <RecordsSection
        page={page}
        limit={limit}
        setPage={setPage}
        filters={filters}
        records={records}
        getFilteredHistories={getFilteredHistories}
        deleteHistory={deleteHistory}
        deleteAllHistories={deleteAllHistories}
      />
    );
  });
};

const page = 1;
const limit = 10000;
const filters = { type: "expense", category: "" };
const setPage = jest.fn();
const deleteHistory = jest.fn();
const deleteAllHistories = jest.fn();
const getFilteredHistories = jest.fn();

describe("Records section component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent(RECORDS);
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderComponent(RECORDS);
    });

    it("a title", () => {
      screen.debug();
      expect(screen.getByText(/records/i)).toBeInTheDocument();
    });
  });

  describe('modal "Delete all records"', () => {
    it("should open", () => {
      const { container } = renderComponent(RECORDS);
      const buttonOpenModal = container.querySelector(
        '[data-modal="data-delete"]'
      );

      userEvent.click(buttonOpenModal);

      expect(
        screen.getByText(/do you want to delete the entire records\?/i)
      ).toBeInTheDocument();
    });

    it("should close", () => {
      const { container } = renderComponent(RECORDS);
      const buttonOpenModal = container.querySelector(
        '[data-modal="data-delete"]'
      );

      userEvent.click(buttonOpenModal);

      expect(
        screen.getByText(/do you want to delete the entire records\?/i)
      ).toBeInTheDocument();

      userEvent.click(screen.getByText(/cancel/i));

      expect(
        screen.queryByText(/do you want to delete the entire records\?/i)
      ).not.toBeInTheDocument();
    });
  });

  it("should render text when records empty", () => {
    renderComponent([]);

    expect(screen.getByText(/records list is empty/i)).toBeInTheDocument();
  });

  it("should change page", () => {
    renderComponent(RECORDS);

    userEvent.click(
      screen.getByRole("button", {
        name: /go to page 2/i,
      })
    );
  });

  it("should delete all records", async () => {
    const { container } = renderComponent(RECORDS);
    const buttonOpenModal = container.querySelector(
      '[data-modal="data-delete"]'
    );

    userEvent.click(buttonOpenModal);

    userEvent.click(
      screen.getByRole("button", {
        name: /delete/i,
      })
    );

    await renderComponentAsync([]);
  });
});
