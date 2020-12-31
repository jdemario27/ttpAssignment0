function fizzBuzz(start, end) {
  // Insert code here;
  var array = [];
  for(var i = start; i <= end; i++){
    if(i % 3 == 0 && i % 5 != 0){
      array.push("Fizz");
    }
    else if(i % 5 == 0 && i % 3 != 0){
      array.push("Buzz");
    }
    else if(i % 3 == 0 && i % 5 == 0){
      array.push("FizzBuzz");
    }
    else{
      array.push(i);
    }
  }
  return array;
}
console.log(fizzBuzz(1, 15));
// Do not edit this line;
module.exports = fizzBuzz;