import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import "@testing-library/jest-dom";

//mock next.js Link since it doesn’t fully work in tests w/a regular <a> tag
//react tests work best with standard HTML

jest.mock("next/link", () => {
  const MockLink = ({ children, href }) => (
    <a href={href} data-testid="mock-link">
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("Navigation", () => {
  test("renders all navigation links", () => {
    render(<Navigation />);

    const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
    const galleryLink = screen.getByRole("link", { name: /gallery/i });
    const favoritesLink = screen.getByRole("link", { name: /favorites/i });

    expect(spotlightLink).toBeInTheDocument();
    expect(spotlightLink).toHaveAttribute("href", "/"); //href confirms the navigation targets are correct

    expect(galleryLink).toBeInTheDocument();
    expect(galleryLink).toHaveAttribute("href", "/gallery");

    expect(favoritesLink).toBeInTheDocument();
    expect(favoritesLink).toHaveAttribute("href", "/favorites");
  });
});
