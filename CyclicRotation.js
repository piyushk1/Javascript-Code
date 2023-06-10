// Given an array, rotate the array by one position in clock-wise direction.


   function rotate(arr,n){
        //code here
        let last = arr[n-1];
        for(let i=n-1;i>=1;i--)
        {
            arr[i]=arr[i-1];
        }
        arr[0] = last;
        return arr;
    }
  

const n = 5;
const arr = [1, 2, 3, 4, 5];

console.log(rotate(arr,n));