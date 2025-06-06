const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  let outputLog = "";
  console.clear;
  if (age >= 13 && age <= 19) {
    outputLog = "You are a teen!";
  } else {
    outputLog = "You are not a teen!";
  }

  console.log(outputLog);
  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
