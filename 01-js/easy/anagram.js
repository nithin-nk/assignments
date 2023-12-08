/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  const cleanStr = (str) => str.replace(/[^\w]/g,'').toLowerCase();
  const sortedstr1  = cleanStr(str1).split('').sort().join('');
  const sortedstr2  = cleanStr(str2).split('').sort().join('');
  return sortedstr1 === sortedstr2;

}
const a = "spar";
const b = "rasp";
console.log(isAnagram(a,b));

module.exports = isAnagram;
