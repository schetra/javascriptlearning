
//Callbacks = pass functions as parameters to other functions and call them inside the outer functions
function print(callback) {  
    callback('task1');
}


function taskOne() {
    console.log("task 1");
}
function taskTwo() {
    console.log("task 2");
}


//This will print "task 1, then task 2"
taskThree();

//Now with setTimout on task 1
function taskOne() {
    console.log("task 1");
}
function taskTwo() {
    console.log("task 2");
}
setTimeout(taskOne, 2000);//makes external request
taskTwo();

//This will print "task 2, then task 1"


//Another example
const message = function() {
    console.log("This message is shown after 3 seconds")
}
setTimeout(message, 3000);
//Expected output "This message is shown after 3 seconds"

const myPromise1 = new Promise((resolve, reject) => {
    let connection = true;
   
    if(connection) {
        setTimeout( () => { resolve('api 1 completed') }, 5000);
    } else {
        reject('api 1 failed');
    }
});

const myPromise2 = new Promise((resolve, reject) => {
    let connection = true;

    if(connection) {
        setTimeout( () => { resolve('api 2 completed') }, 2000);
    } else {
        reject('api 2 failed');
    }

});

// myPromise1.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });

// myPromise2.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });

Promise.all([myPromise1, myPromise2]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});



