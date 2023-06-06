// Find the longest word in a sentence.



const sentence = "The quick brown fox jumps over the lazy dog";


const longestWord = "quick";



function findLongestWord(sentence) {
  // Your code here
  let long =[];
  sentence = sentence.split(" ");
  for(let i=0;i<sentence.length;i++)
  {
    for(let j =0;j<sentence[i].length;j++)
    {
        long.push(sentence[i]);
    }
    
 
}
}
console.log(findLongestWord(sentence));