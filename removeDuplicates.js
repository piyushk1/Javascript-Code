// Problem: Filter out duplicate elements from a given array of strings.

// Input: An array of strings.
// Output: An array with duplicate elements removed.
const strings = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple'];
// const result = ['apple', 'banana', 'orange', 'grape'];
function removeDuplicates(arr)
{
    const unique =arr.filter((item,index)=> arr.indexOf(item)===index);
    console.log(unique);
}
removeDuplicates(strings);
