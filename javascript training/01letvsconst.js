
//let is variable that can be used elsewhere in the code outside of that specific code block
let numOfApples = 50;
numOfApples = 100;

console.log(numOfApples); // Prints 100

//--------------------------------------------
//Scope of let variable inside brackets

let numOfOranges = 50;
{ let numOfOranges = 100;

console.log(numOfOranges);} // Prints 100 again
console.log(numOfOranges); //Prints 50

//--------------------------------------------

//const is a variable that you cannot give another value to later in the code
const numofGrapes = 50;
numofGrapes = 100;

console.log(numofGrapes); //Prints 50
