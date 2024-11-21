/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    newstr=str.toUpperCase().split('');
    let count=0;
    for(let i=0;i<newstr.length;i++)
    {
      if(newstr[i]=='A' || newstr[i]=='E' || newstr[i]=='I' || newstr[i]=='O' || newstr[i]=='U')
        {
          count+=1
        }
    }   
//console.log(count);
return count;
}
//countVowels('aaaaaatyrdf')
module.exports = countVowels;