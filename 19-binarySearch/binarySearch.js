class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var half = Math.floor(nums.length / 2);
    if(nums[half] > target) {
      var x = nums.slice(0, half);
      return this.binarySearch(x, target);
    } else if(nums[half] < target) {
      var y = nums.slice(half + 1, nums.length);
      return this.binarySearch(y, target);
    } else if(nums[half] == target) {
      return true;
    } else {
      return false;
    }
  }
}
//console.log(binarySearch([1, 2, 3, 4, 5], 3));
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;