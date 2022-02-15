import { RecordsList } from "../RecordsList";
import { render } from "@testing-library/react";
import { LAST_RECORDS } from "./__mock__/mock";

const renderComponent = (lastRecords) => {
  return render(<RecordsList lastRecords={lastRecords} />);
};

describe("RecordList component", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderComponent(LAST_RECORDS);
    expect(baseElement).toMatchSnapshot();
  });
});
