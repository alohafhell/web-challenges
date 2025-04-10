import { add } from "./index.js";
import { multiply } from "./index.js";
import { subtract } from "./index.js";
import { divide } from "./index.js";

//add
test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);

  expect(result).toBe(5);
});

test("if result is negative if larger number is negative", () => {
  const result = add(-5, 3);
  expect(result).toBeLessThan(0);
});

test("if result is close to 0.3, if called with add", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//multiply
test("returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBeCloseTo(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-1, 2);
  expect(result).toBeLessThan(0);
});

//substract
test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(2, 5);
  expect(result).toBeLessThan(0);
});

//divide
test("returns 3 if called with substract(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
