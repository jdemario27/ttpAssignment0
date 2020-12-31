function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var count = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] < target){
      count++;
    }
  }
  return count;
}
console.log(countOfAllNumbersSmallerThanTarget([1, 2, 3, 4, 5, 6, 7], 5));
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;