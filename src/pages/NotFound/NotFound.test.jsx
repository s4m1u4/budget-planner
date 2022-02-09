import { NotFound } from "./NotFound";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import pageNotFound from "../../assets/images/page-not-found.png";

const renderWithRouter = (Component) => {
  return render(<BrowserRouter>{Component}</BrowserRouter>);
};

describe("Not found component", () => {
  it("make snapshot", () => {
    const { baseElement } = renderWithRouter(<NotFound />);

    expect(baseElement).toMatchSnapshot();
  });

  describe("should render", () => {
    beforeEach(() => {
      renderWithRouter(<NotFound />);
    });

    it("should render a title", () => {
      expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    });

    it("should render an image", () => {
      const image = screen.getByRole("img");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("alt", "Page not found");
      expect(image).toHaveAttribute("src", pageNotFound);
    });

    it('should render a button "Come back"', () => {
      expect(screen.getByText(/Come back/i)).toBeInTheDocument();
    });
  });
});
