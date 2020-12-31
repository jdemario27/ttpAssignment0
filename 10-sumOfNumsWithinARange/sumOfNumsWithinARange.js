function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var count = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] >= start && nums[i] <= end){
      count++;
    }
  }
  return count;
}
console.log(sumOfNumsWithinARange([1, 2, 3, 4, 5, 6, 7, 8], 3, 7));
// Do not edit this line;
module.exports = sumOfNumsWithinARange;