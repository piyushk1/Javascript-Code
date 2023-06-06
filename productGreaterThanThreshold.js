//     Calculate the product of all numbers in a given array greater than a specified threshold.

// Input:


const numbers = [3, 6, 2, 9, 5, 7];
const threshold = 4;

// Output:

// javascript

// const product = 3780;



function productGreaterThanThreshold(arr, threshold) {
  // Your code here
  let newarr = arr.filter(item => item>threshold).reduce((a,b)=>a*b);
  console.log(newarr);

}
productGreaterThanThreshold(numbers,threshold);