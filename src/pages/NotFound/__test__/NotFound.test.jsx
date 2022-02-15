import { NotFound } from "../NotFound";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import pageNotFound from "../../../assets/images/page-not-found.png";

const renderWithRouter = () => {
  return render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe("Not found page", () => {
  it("snapshot matching", () => {
    const { baseElement } = renderWithRouter();
    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderWithRouter();
    });

    it("a title", () => {
      expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    });

    it("an image", () => {
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.getByRole("img")).toHaveAttribute("alt", "Page not found");
      expect(screen.getByRole("img")).toHaveAttribute("src", pageNotFound);
    });

    it('a button "Come back"', () => {
      expect(screen.getByText(/come back/i)).toBeInTheDocument();
    });
  });
});
