//How to use Map in JS
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];
// doublling array with map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

//-------------------------------------------------------

//finding sqrt of each element
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
console.log(roots) // roots is now [1, 2, 3]
console.log(numbers) // numbers is still [1, 4, 9]

//-------------------------------------------------------
//The following code takes an array of objects and creates a new array containing the newly reformatted objects.
let kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})
console.log(reformattedArray) // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],
console.log(kvArray) 
// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

