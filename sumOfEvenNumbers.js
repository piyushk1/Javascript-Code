// Problem: Calculate the sum of all even numbers in a given array.

// Input: An array of integers.
// Output: The sum of all even numbers in the array.

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,113,112,120];

function sumOfEvenNumbers(array){
let even = array.filter(item => item%2 ==00);
let evenSum =even.reduce((a,b) =>a+b);
return evenSum; 

}

console.log(sumOfEvenNumbers(arr));