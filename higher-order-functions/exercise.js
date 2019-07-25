// Challenge 1
function addTwo(num) {
    return num + 2;
}
// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}
console.log(map([1, 2, 3], addTwo)); // [3, 4, 5]

// Challenge 4
function forEach(array, callback) {
    for (i = 0; i < array.length; i++) {
       callback(array[i]);
    }
}
console.log(forEach([1, 2, 3], (element) => console.log(element))); 


// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newArray = [];
    array.forEach(function(element) {
        newArray.push(callback(element))
    });
    return newArray;
}
mapWith([1,2,3], (element) => element * 3) // [3, 6, 9]

//Extension 2
function reduce(array, callback, initialValue) {
    let acc = initialValue;
    array.forEach(function(element) {
        acc = callback(acc, element);
    });
    return acc;
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8

//Extension 3
function concat(a, b) {
    return a.filter(function(element) {
      return b.includes(element);
    });
}
function reduce(array, callback, initialValue) {
    let acc = initialValue;
    array.forEach(function(element) {
        acc = callback(acc, element);
    });
    return acc;
}
function intersection(arrays) {
    var args = Array.from(arguments);
    return reduce(args, concat, args[0]);
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])); // [5, 15]

//Extension 4
function unique(a, b) {
    return a.concat(b.filter(function(element) {
        return a.includes(element) === false;
      })
    );
}
function reduce(array, callback, initialValue) {
    let acc = initialValue;
    array.forEach(function(element) {
        acc = callback(acc, element);
    });
    return acc;
}
function union(arrays) {
    var args = Array.from(arguments);
    return reduce(args, unique, args[0]);
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));  // [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objMatches(arr1, arr2, callback) {
    return arr1.reduce(function(acc, word, index) {
        if (callback(word) === arr2[index]) {
            acc[word] = arr2[index];
        }
        return acc;
}, {})
}
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
//{ hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	return arrVals.reduce(function(acc, word) {
		acc[word] = arrCallbacks.reduce(function(array, func) {
			array.push(func(word))
			return array
        }, [])
	return acc 
    }, {})
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
