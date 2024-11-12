// import necessary react testing library helpers here
import { render, screen, fireEvent } from "@testing-library/react";
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  // render(<Counter />); Forbidden usage of `render` within testing framework `beforeEach` setup, use `render` directly within the test instead.
});

test("renders counter message", () => {
  // Render the Counter component directly within the test
  render(<Counter />);
  // Verify if "Counter" heading is displayed
  const counterHeading = screen.getByText(/Counter/i);
  expect(counterHeading).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Render the Counter component directly within the test
  render(<Counter />);
  // Check if the initial count is set to 0
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Render the Counter component directly within the test
  render(<Counter />);
  // Simulate clicking the increment button and verify the count increases by 1
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Render the Counter component directly within the test
  render(<Counter />);
  // Simulate clicking the decrement button and verify the count decreases by 1
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("-1");
});
