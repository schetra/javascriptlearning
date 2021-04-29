let collection = new Map();

collection.set('key', 100);
collection.set('id', 300);
collection.set('age', 78);

console.log(collection.get('key'));//Expected output of 100
console.log(collection.get('age'));//Expected output of 78

//-------------------------------------------------------------------------

let c1 = new Map();

c1.set('key', 100);
c1.set(5, 300);

console.log(c1.size);//Expected output of 2 size gives how many key/value pairs are in collection

//-------------------------------------------------------------------------

let c2 = new Map();

c2.set('key', 100);

c2.set(5, 300);
c2.clear();
console.log(c2.size);//Expected output of 0, using clear will zero out the collection

//-------------------------------------------------------------------------

let c4 = new Map();

c4.set('key', 100);

c4.set(5, 300);

for (let v of c4) {
    console.log(v) 
}; //Expected output = ["key", 100], [5, 300], using "let v of c4" gives list of arrays of all key/pairs


//-------------------------------------------------------------------------

let c5 = new Map();

c5.set('key', 100);
c5.set(5, 300);

for (let v of c5.values()) {
    console.log(v) 
}; //Expected output = 100, 300, using "c5.values" gives all values within collection

//-------------------------------------------------------------------------

let c6 = new Map();

c6.set('key', 100);
c6.set(5, 300);

for (let v of c6.keys()) {
    console.log(v) 
}; //Expected output = key, 5, using using "c6.keys" gives all keys within collection

