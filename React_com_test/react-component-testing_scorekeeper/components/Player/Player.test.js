import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(
    <Player
      name="Jane"
      score={5}
      onIncreasePlayerScore={() => {}}
      onDecreasePlayerScore={() => {}}
    />
  );
  // 1. Check for the player's name
  expect(screen.getByText("Jane")).toBeInTheDocument();

  // 2. Check for the player's score
  expect(screen.getByText("5")).toBeInTheDocument();

  // 3. Get all buttons and make sure there are two
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleIncrease = jest.fn();
  const handleDecrease = jest.fn();

  render(
    <Player
      name="John"
      score={3}
      onIncreasePlayerScore={handleIncrease}
      onDecreasePlayerScore={handleDecrease}
    />
  );
  // Get buttons by their accessible labels (from aria-label)
  const increaseButton = screen.getByRole("button", {
    name: /increase score/i,
  });
  const decreaseButton = screen.getByRole("button", {
    name: /decrease score/i,
  });

  // Simulate user clicking on both buttons
  await userEvent.click(increaseButton);
  await userEvent.click(decreaseButton);

  // Check that each function was called once
  expect(handleIncrease).toHaveBeenCalledTimes(1);
  expect(handleDecrease).toHaveBeenCalledTimes(1);
});
