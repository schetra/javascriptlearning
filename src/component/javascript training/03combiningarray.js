//3 ways to combine Arrays

//Spread Operator for a list
var myItemsToAdd = ['bread', 'soup', 'ketchup']
var myItems = ['musturd', 'waffles', ...myItemsToAdd];
console.log(myItems); //This will = ['musturd', 'waffles', 'bread', 'soup', 'ketchup']
//Spread Operator for a string and List
var myStringsToAdd = 'lin';
var myString = [...'frank', ...myStringsToAdd];
console.log(myString); //This will = [frank, l, i, n]
//Spread Operator for two Arrays
var myList = [1, 2, 3]
var myOtherList = [4, 5, 6]
var myLastList = [...myList, ...myOtherList]
console.log (myLastList); //This will = [1,2,3,4,5,6]

//-------------------------------------------------------
//Combine Array with Concat
var myList = [1, 2, 3]
var myOtherList = [4, 5, 6]
var myLastList = [7, 8, 9]
var finalArray = myList.concat(myOtherList, myLastList)
console.log(finalArray); //This will = [1,2,3,4,5,6,7,8,9].....these are listed in order, so be careful here
//Another option to combine with Concat
var myList = [1, 2, 3]
var myOtherList = [4, 5, 6]
var myLastList = [7, 8, 9]
var finalArray = [].concat(myList, myOtherList, myLastList)
console.log(finalArray); //This will = [1,2,3,4,5,6,7,8,9].....these are listed in order, so be careful here

//-------------------------------------------------------
//Another option to combine with push method and spread
var myList = [1, 2, 3]
var myOtherList = [4, 5, 6]
var myLastList = [7, 8, 9]
var finalArray = [];
finalArray.push(...myList, ...myOtherList, ...myLastList);
console.log(finalArray); //This will = [1,2,3,4,5,6,7,8,9]
