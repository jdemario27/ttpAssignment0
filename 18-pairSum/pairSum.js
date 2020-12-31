function pairSum(nums, target) {
  // Insert code here;
  for(var i = 0; i < nums.length; i++){
    for(var j = nums.length; j > i; j--){
      if(nums[i] + nums[j] == target){
        return true;
      }
    }
  }
  return false;
}
console.log(pairSum([1, 2, 3, 4, 5], 8));
// Do not edit this line;
module.exports = pairSum;