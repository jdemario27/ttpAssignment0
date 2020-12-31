function titleCaseEdit(title) {
  // Insert code here;
  //split title into an array 
  var arr = title.split(' ');
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join(' ');
}

console.log(titleCaseEdit("lord of the flies"));

// Do not edit this line;
module.exports = titleCaseEdit;