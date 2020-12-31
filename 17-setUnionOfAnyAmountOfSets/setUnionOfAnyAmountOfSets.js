function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var set = new Set();
  for(var i = 0; i < args.length; i++){
    args[i].forEach(set.add, set);
  }
  return set;
}
console.log(setUnionOfAnyAmountOfSets([1, 2, 4], [4, 5, 6], [6, 7, 8]));
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;