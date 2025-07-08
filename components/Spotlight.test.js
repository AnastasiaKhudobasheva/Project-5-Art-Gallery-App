//GOALS:

// Renders the heading: SPOTLIGHT //
// Renders image and title: from the random piece
// Renders artist name
// Favorite button works: click triggers onToggleFavorite

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Spotlight from "./Spotlight";
import "@testing-library/jest-dom";

//mock the Link component (from next/link) to just render child normally
//(fake next/link to avoid Next.js routing issues in tests)

jest.mock("next/link", () => {
  return ({ children }) => children;
});

//mock Math.random to return predictable index
//always pick first item w/index 0, so we control which art piece gets picked every time

jest.spyOn(global.Math, "random").mockReturnValue(0);

// test 1: title

test("renders spotlight heading", () => {
  render(
    <Spotlight
      artPieces={[
        {
          imageSource: "/test.jpg",
          name: "Sunrise",
          artist: "Alice",
          slug: "sunrise",
        },
      ]}
      favorites={[]}
      onToggleFavorite={() => {}}
    />
  );

  const heading = screen.getByRole("heading", { name: /spotlight/i });
  expect(heading).toBeInTheDocument();
});

// test 2: image, title, artist name

test("renders image, title and artist from art piece", () => {
  render(
    <Spotlight
      artPieces={[
        {
          imageSource: "/images/art1.jpg",
          name: "Ocean",
          artist: "Jane",
          slug: "ocean",
        },
      ]}
      favorites={[]}
      onToggleFavorite={() => {}}
    />
  );

  // Check image
  const image = screen.getByRole("img", { name: /ocean/i });
  expect(image).toBeInTheDocument();

  // Check title
  const title = screen.getByText(/ocean/i);
  expect(title).toBeInTheDocument();

  // This works when text is broken up between elements like "By:" (split from artist name)
  const artistName = screen.getByText(/jane/i);
  expect(artistName).toBeInTheDocument();

  // Optionally: verify parent text
  expect(artistName.parentElement).toHaveTextContent(/by: jane/i);
});

// test 3: fav button toggle

test("calls onToggleFavorite when favorite button is clicked", async () => {
  const user = userEvent.setup(); // sets up virtual user
  const toggleMock = jest.fn();

  render(
    <Spotlight
      artPieces={[
        {
          imageSource: "/test.jpg",
          name: "Sunrise",
          artist: "Alice",
          slug: "sunrise",
        },
      ]}
      favorites={[]}
      onToggleFavorite={toggleMock}
    />
  );

  const button = screen.getByRole("button");
  await user.click(button); // simulates a click on the favorite button

  expect(toggleMock).toHaveBeenCalledWith("sunrise");
});
