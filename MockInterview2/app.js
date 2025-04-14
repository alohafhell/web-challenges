const exampleNumbers = [2, 7, 11, 15];
const exampleTarget = 9;

const result = twoSums(exampleNumbers, exampleTarget);
console.log(result); // Should log: [0, 1]

// Explanation: Because exampleNumbers[0] + exampleNumbers[1] == 9, we return [0, 1].

function twoSums(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    //loop through each number aka look at each number in the array, one by one.
    for (let j = i + 1; j < numbers.length; j++) {
      //for each number, we check all the other numbers after it to see if together they make the target.
      if (numbers[i] + numbers[j] === target) {
        return [i, j]; //Check if the two numbers add to the target
      }
    }
  }
}
