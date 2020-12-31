function frequencyCounter(word) {
  // Insert code here;
  var freqArray = [];
  for(var i = 0; i < word.length; i++){
    var letter = word.charAt(i);
    if(freqArray[letter]){
      freqArray[letter]++;
    }
    else{
      freqArray[letter] = 1;
    }
  }
  return freqArray;
}
console.log(frequencyCounter("abbcccdddd"));
// Do not edit this line;
module.exports = frequencyCounter;