import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackButton from "./BackButton";
import { useRouter } from "next/router";

//Mock useRouter from Next.js
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

//fake function to track if router.push gets called
test("renders back button and navigates to Gallery when clicked", async () => {
  const pushMock = jest.fn();

  //pretend that useRouter gives us an object with push()
  useRouter.mockReturnValue({
    push: pushMock,
  });

  const user = userEvent.setup();

  render(<BackButton />);

  //find the button by role & text
  //regular expression, written between slashes: /back to gallery/i
  //best practice in testing — flexible and resilient - for case-sensitive matching

  const button = screen.getByRole("button", { name: /back to gallery/i });
  expect(button).toBeInTheDocument();

  //simulate a user clicking the button
  await user.click(button);

  // expect the mocked push function to have been called with the correct route
  expect(pushMock).toHaveBeenCalledWith("/gallery");
});
