function sumOfAllOddNumbers(nums) {
  // Insert code here;
  var count = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2 != 0){
      count++;
    }
  }
  return count;
}
console.log(sumOfAllOddNumbers([1, 2, 3, 4, 5, 7, 9]));
// Do not edit this line;
module.exports = sumOfAllOddNumbers;