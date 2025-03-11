console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
const title = "Pride and Prejudice";
const author = "Jane Austen";
let rating = 4.9;
let copiesSold = 20000000;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/
console.log("Title: ", title);
console.log("Author: ", author);
console.log("Rating: ", rating);
console.log("Copies sold: ", copiesSold);
// --v-- write your code here --v--
copiesSold += 10000000;
rating += 0.1;

console.log("Title: ", title);
console.log("Author: ", author);
console.log("Rating: ", rating);
console.log("Copies sold: ", copiesSold);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/
function logBookData() {
  console.log("Title: ", title);
  console.log("Author: ", author);
  console.log("Rating: ", rating);
  console.log("Copies sold: ", copiesSold);
}

copiesSold *= 2;
console.log("Copies sold: ", copiesSold);

copiesSold -= 2347;
console.log("Copies sold: ", copiesSold);
// --v-- write your code here --v--

// --^-- write your code here --^--
