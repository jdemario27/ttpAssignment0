function countOfAllBooleans(arr) {
  // Insert code here;
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === true || arr[i] === false){
      count++;
    }
  }
  return count;
}
console.log(countOfAllBooleans([3, 2, true, false, false]));
// Do not edit this line;
module.exports = countOfAllBooleans;