// Problem: Find the average of all positive numbers in a given array.

// Input: An array of numbers.
// Output: The average of all positive numbers in the array.
const numbers = [5, -2, 8, -1, 10, 3];
// const average = 8 / 3;  // 2.6666666666666665
function averageOfPositiveNumbers(arr) {
    // Your code here
    let positive = arr.filter(item => item>0);
    let len = positive.length
    console.log(positive);
    console.log(len);
    return positive.reduce((a,b)=> (a+b),0)/len;
  }

  console.log(averageOfPositiveNumbers(numbers));