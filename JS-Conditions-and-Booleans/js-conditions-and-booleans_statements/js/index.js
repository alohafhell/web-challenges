console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let pricePerHotdog = 0;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else if (numberOfHotdogs >= 1000000) {
  pricePerHotdog = 0.1;
}

console.log("The price per hot dog is: " + pricePerHotdog);

// Part 4: Daytime
const currentHour = 17;

let statement = "";

if (currentHour < 17) {
  statement = "Still need to learn...";
}
if (currentHour >= 17) {
  statement = "Partytime!!!";
}

console.log(statement);

// Part 5: Greeting
let userName = "Archibald";
let greeting =
  "Hello " + (userName === "Marcel" ? "Coach" : "Archibald!") + "!";

console.log(greeting);
