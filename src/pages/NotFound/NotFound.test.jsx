import { NotFound } from "./NotFound";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import pageNotFound from "../../assets/images/page-not-found.png";

const renderWithRouter = (Component) => {
  render(<BrowserRouter>{Component}</BrowserRouter>);
};

describe("Not found component", () => {
  it("render a title", () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  it("render an image", () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Page not found");
    expect(image).toHaveAttribute("src", pageNotFound);
  });

  it('render a button "Come back"', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText(/Come back/i)).toBeInTheDocument();
  });
});
