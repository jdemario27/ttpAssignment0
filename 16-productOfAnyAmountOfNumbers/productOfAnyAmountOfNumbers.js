function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product = 1;
  for(let i of args){
    product *= i;
  }
  return product;
}
console.log(productOfAnyAmountOfNumbers(1, 2, 3, 4));
// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;