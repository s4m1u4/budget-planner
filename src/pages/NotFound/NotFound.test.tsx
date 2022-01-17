import { shallow } from "enzyme";
import { NotFound } from "./NotFound";
import pageNotFound from "../../assets/images/page-not-found.png";
import { Title } from "./NotFound.styles";

const setUp = () => shallow(<NotFound />);

describe("Not found component", () => {
  it("render a title", () => {
    const wrapper = setUp();
    expect(wrapper.find(Title).text()).toBe("Page not found");
  });

  it("render an image", () => {
    const wrapper = setUp();
    expect(wrapper.find("img").prop("src")).toBe(pageNotFound);
  });

  it('render a button "Come back"', () => {
    const wrapper = setUp();
    expect(wrapper.find(".btn").text()).toBe("Come back");
  });

  it('click a button "Come back"', () => {
    const wrapper = setUp();
    expect(wrapper.find(".btn").prop("to")).toBe("/");
  });
});
