import { Overview } from "../Overview";
import { render, screen } from "@testing-library/react";
import { RECORDS } from "./__mock__";

const renderComponent = () => render(<Overview records={RECORDS} />);

describe("Overview component", () => {
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
        screen.getByRole("heading", { name: /overview/i })
      ).toBeInTheDocument();
    });
  });
});
