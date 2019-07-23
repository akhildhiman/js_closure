// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
// → [1, 2, 3, 4, 5, 6]
arrays.reduce((acc, curr) => acc.concat(curr));

// Challenge 2. Your own loop.
// Your code here.  
function every(arr, test) {
  for (i = 0; i < arr.length; i++) {
    if (!test(arr[i])) {   
      return false;
    }
  }
  return true;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every2(array, test) {
  var result = true;
  var usingTheSomeMethod = array.some(function(num){
    if (!test(num)) {
      result = false;
    }
  });
  return result;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
