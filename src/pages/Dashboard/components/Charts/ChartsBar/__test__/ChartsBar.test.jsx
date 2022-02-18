import { ChartsBar } from "../ChartsBar";
import { render } from "@testing-library/react";
import { DATA } from "./__mock__";

const renderComponent = () => {
  return render(<ChartsBar data={DATA} />);
};

describe("ChartsBar component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toMatchSnapshot();
  });
});
