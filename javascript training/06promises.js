//Promise basics
//Promise(Pending)->.then(resolved) OR .catch(rejected) -> Promise(pending)



const myPromise = new Promise((resolve, reject) => {
    let connection = true;

    if(connection) {
        resolve('Connection established');
    } else {
        reject('Connection refused');
    }

});

myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

//When connection = true, message = 'Connection established'
//When connection = false, message = 'Connection refused'




function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();