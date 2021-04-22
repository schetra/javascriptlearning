// List of Array examples below

// Standard Array
// Nested Array
// Access Arrays with Index
// Modify Array Data with Indexes
//Access Multi-Dimensional Arrarys with Indexes
//Manipulate Arrays with push()
//Manipulate Arrays with pop()
//Manipulate Arrays with shift()
//Manipulate Arrays with unshift()
//More nested array examples.....Shopping List
// Array: string, object (spread operator)
    //List
    //String
// Array.from to create a shallow copy
// Array.of
// Array.find
// Array.findIndex()
// Array.some
// Array.every

//Standard Array
var ourArray =  ["John", 23, "Mike"];

//Nested Array
var myArray = [["Frank", 23], ["Bart", 55]];

//Access Array data with Indexes
var indexArray = [50, 60, 70];
var ourData = indexArray[0];//This will = 50 var myData = indexArray[2];//This will = 70
console.log(ourData);

//Modify Array Data with Indexes
var indexArray = [23,34,55]
indexArray[1] = 44;
console.log(indexArray); //This will be [23,44,55]

//Access Multi-Dimensional Arrarys with Indexes
var multiArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var data = multiArray[2][1]; 
console.log(data);//This will be = 8

//Manipulate Arrays with push()
var ourArray = ["UFO's", "ARE", "Real"];
ourArray.push(["in", "new mexico"]);
console.log(ourArray); //This will equal ["UFO's", "ARE", "Real",["in", "new mexico"]]

//Manipulate Arrays with pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);// ourArray now equals [1,2]
console.log(removedFromOurArray); //removedFromOurArray = 3.
//Manipulate Arrays with shift()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.shift(1);
console.log(ourArray); //removedFromOurArray now = 1 and ourArray now equals [2,3]

//Manipulate Arrays with unshift()
var ourArray = [["John", 23], ["dog", 3]];
// ourArray.shift();
ourArray.unshift(["paul", 35]);
console.log(ourArray);//ourArray now = [["paul", 35], ["dog", 3]]

//More nested array examples.....Shopping List
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];


//Array: list, string, object (spread operator)
//Array list
var myItemsToAdd = ['bread', 'soup', 'ketchup']
var myItems = ['musturd', 'waffles', ...myItemsToAdd];
console.log(myItems); //This will = ['musturd', 'waffles', 'bread', 'soup', 'ketchup']
//string
var myStringsToAdd = 'lin';
var myString = [...'frank', ...myStringsToAdd];
console.log(myString); //This will = [frank, l, i, n]

//How to use Array.from() to create a shallow copy of an Array. Can be replaced by Spread Operator
var names = ['Bart', 'Maggie', 'Tommy', 'Wilbur'];
var namesPartTwo = Array.from(names);
console.log(namesPartTwo); //This will be ['Bart', 'Maggie', 'Tommy', 'Wilbur']

//How to use Array.of()
var myArray = Array.of(7); 
console.log(myArray);// [7]
//vs Array(7); array of 7 empty slots
var myOtherArray = Array.of(1, 2, 3); // [1, 2, 3]
//vs Array(1, 2, 3);  [1, 2, 3]

//How to use Array.find
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // expected output = 12

//How to use Array.findIndex(). First element to pass test gets displayed
const ranks = [1, 5, 7, 8, 10, 7];
const index = ranks.findIndex(rank => rank === 7);
console.log(index); // expected output = 2

//How to use Array.some(). Checks to see if one element passes a set test.
const numbers = [ 4, 5, 7, 9, 10, 3 ];
const lessThanFive = numbers.some(e => e < 5);
console.log(lessThanFive); //expected output = true

//How to use Array.every. Each element in an array passes a set test
const result = [10, 5, 20, 100].every(function(number){
    return number < 150
})
console.log(result) // true

//How to use Array.filter. Find all greater than 8
const array4 = [5, 12, 8, 130, 44];
const filterExample = array4.filter(element => element > 8);
console.log(filterExample); // expected output = 130



