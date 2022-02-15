import { ChartsPie } from "../ChartsPie";
import { render } from "@testing-library/react";
import { DATA_INCOME, TITLE } from "./__mock__";

const renderComponent = () => {
  return render(<ChartsPie title={TITLE} data={DATA_INCOME} />);
};

describe("ChartsPie component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });
});
