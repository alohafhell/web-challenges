console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

const increaseOne = document.querySelector('[data-js="increase-by-one"]');
const increaseFive = document.querySelector('[data-js="increase-by-five"]');
const decreaseOne = document.querySelector('[data-js="decrease-by-one"]');
const decreaseFive = document.querySelector('[data-js="decrease-by-five"]');
const multiplyTwo = document.querySelector('[data-js="multiply-by-two"]');
const divideTwo = document.querySelector('[data-js="divide-by-two"]');

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

addButton.addEventListener("click", () => {
  const addResult = operand1 + operand2;
  console.log("Addition: " + addResult);
});

subtractButton.addEventListener("click", () => {
  const subtractResult = operand1 - operand2;
  console.log("Subtraction:" + subtractResult);
});

multiplyButton.addEventListener("click", () => {
  const multiplyResult = operand1 * operand2;
  console.log("Multiply:" + multiplyResult);
});

divideButton.addEventListener("click", () => {
  const divideResult = operand1 / operand2;
  console.log("Division:" + divideResult);
});

exponentButton.addEventListener("click", () => {
  const exponentResult = operand1 ** operand2;
  console.log("Exponent:" + exponentResult);
});

moduloButton.addEventListener("click", () => {
  const moduloResult = operand1 % operand2;
  console.log("Modulo:" + moduloResult);
});
/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

increaseOne.addEventListener("click", () => {
  operand1 = operand1 + 1;
  console.log("Increase by 1: " + operand1);
});

increaseFive.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log("Increase by 5: " + operand1);
});

decreaseOne.addEventListener("click", () => {
  operand1 = operand1 - 1;
  console.log("Decrease by 1: " + operand1);
});

multiplyTwo.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log("Multiply by 2: " + operand1);
});

divideTwo.addEventListener("click", () => {
  operand1 = operand1 / 2;
  console.log("Divide by 2: " + operand1);
});

decreaseFive.addEventListener("click", () => {
  operand1 = operand1 - 5;
  console.log("Decrease by 5: " + operand1);
});
