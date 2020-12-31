function isPalindrome(word) {
  // Insert code here;
  word = word.toLowerCase();
  for(var i = 0; i < word.length; i++){
    if(word[i] !== word[word.length - 1 - i]){
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("racecar"));
// Do not edit this line;
module.exports = isPalindrome;