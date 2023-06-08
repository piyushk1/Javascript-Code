function countVowels(word) {
    const vowels ='aeiouAEIOU';
    let count =0;
    for(let i=0;i<word.length;i++)
    {
      if(vowels.includes(word[i]))
      count++;
    }
    return count;
   }

   console.log(countVowels("AIRTELYEARLYPLAN"));