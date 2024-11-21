/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

let str1arr=str1.toUpperCase().split('').sort();
let str2arr=str2.toUpperCase().split('').sort();
let flag=0;
for(let i = 0; i < str1arr.length; i++){
  if(str1arr[i]!=str2arr[i]){
    return false
  }
}
return true
}
//isAnagram('openai','aiopen');
module.exports = isAnagram