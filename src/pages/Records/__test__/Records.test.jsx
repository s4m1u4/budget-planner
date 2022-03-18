import { Records } from "../Records";
import { act, render, screen } from "@testing-library/react";
import { CATEGORIES, HISTORIES } from "./__mock__";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const renderComponent = () => {
  return render(
    <DndProvider backend={HTML5Backend}>
      <Records
        limit={10000}
        categories={CATEGORIES}
        histories={HISTORIES}
        getHistories={getHistories}
        deleteHistory={deleteHistory}
        getCategories={getCategories}
        deleteAllHistories={deleteAllHistories}
        getFilteredHistories={getFilteredHistories}
      />
    </DndProvider>
  );
};

const renderComponentAsync = async () => {
  await act(async () => {
    await render(
      <DndProvider backend={HTML5Backend}>
        <Records
          limit={10000}
          categories={CATEGORIES}
          histories={HISTORIES}
          getHistories={getHistories}
          deleteHistory={deleteHistory}
          getCategories={getCategories}
          deleteAllHistories={deleteAllHistories}
          getFilteredHistories={getFilteredHistories}
        />
      </DndProvider>
    );
  });
};

const getHistories = jest.fn();
const deleteHistory = jest.fn();
const getCategories = jest.fn();
const deleteAllHistories = jest.fn();
const getFilteredHistories = jest.fn();

describe("Records page", () => {
  it("snapshot matching", async () => {
    await act(async () => {
      const { baseElement } = await renderComponent();
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe("should render", () => {
    beforeEach(async () => {
      await renderComponentAsync();
    });

    it("a title", () => {
      expect(screen.getByText(/records page/i)).toBeInTheDocument();
    });
  });
});
