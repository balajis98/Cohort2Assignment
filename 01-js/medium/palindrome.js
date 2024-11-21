/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newstr=str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/ /g,'')
  let revstr=newstr.toUpperCase().split('').reverse().join('');
  if(newstr.toUpperCase()==revstr){return true}
  else {return false}
}
//isPalindrome()
module.exports = isPalindrome;
