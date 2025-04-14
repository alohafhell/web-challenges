import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  // render the Input component with some test props
  render(
    <Input
      labelText="Username"
      placeholder="Enter your name"
      name="username"
      value=""
      onChange={() => {}}
    />
  );

  // find the input by its role (input = textbox)
  const input = screen.getByRole("textbox");

  // find the label by its text
  const label = screen.getByText("Username");

  // check that the input has the correct attributes
  expect(input).toHaveAttribute("name", "username");
  expect(input).toHaveAttribute("placeholder", "Enter your name");

  // check that the label exists
  expect(label).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  // create a mock function
  const handleChange = jest.fn();

  // render the Input component with the mock function
  render(
    <Input
      labelText="Email"
      placeholder="Enter your email"
      name="email"
      value=""
      onChange={handleChange}
    />
  );

  // get the input field
  const input = screen.getByRole("textbox");

  // simulate user typing "hi"
  await userEvent.type(input, "hi");

  // check if the function was called 2 times (once for "h", once for "i")
  expect(handleChange).toHaveBeenCalledTimes(2);
});
