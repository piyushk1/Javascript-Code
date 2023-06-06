// Count the number of words in a sentence that contain a specific character.

// Input:

// javascript

const sentence = "The quick brown fox jumps over the lazy dog original la la alaa laa laa alaaa aaaa llllaaaa laaa alaa ";
const character = "a";

// Output:

// javascript

// const count = 4;


function countWordsWithCharacter(sentence, character) {
  // Your code here
   sentence = sentence.split(" ");
  let count =0;
  for(let i=0;i<sentence.length;i++)
  {
    for(let j=0;j<sentence[i].length;j++)
    {
        if(sentence[i][j]==character)
        {
            count++;
        }
    }
  }
  return count;
}
console.log(countWordsWithCharacter(sentence,character));