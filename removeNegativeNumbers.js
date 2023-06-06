// Problem: Remove all negative numbers from a given array.

// Input: An array of numbers.
// Output: An array with all negative numbers removed.
const numbers = [5, -2, 8, -1, 10, 3];
const result = [5, 8, 10, 3];

function removeNegativeNumbers(arr) {
    // Your code here
    const newarr= arr.filter(item => item<0);
    return newarr;


  }

  console.log(removeNegativeNumbers(numbers));
  