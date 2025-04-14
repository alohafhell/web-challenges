import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(
    <GameForm
      name="nameOfGame"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      required
      onCreateGame={() => {}}
    />
  );
  const input = screen.getAllByRole("textbox");
  expect(input[0]).toHaveAttribute("name", "nameOfGame");
  expect(input[0]).toHaveAttribute("placeholder", "e.g. Dodelido");

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Create game");
});

test("renders a form with the accessible name 'Create a new game'", () => {});

test("submits the correct form data when every field is filled out", async () => {});

test("does not submit form if one input field is left empty", async () => {});
