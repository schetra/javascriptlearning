//function vs class

function User (){}
const user = new User(); //Can switch order here with functions = hoisted

class Course {}
const course = new Course; // Cannot switch order here with classes = not hoisted

//-------------------------------------------------------------------------

let PersonC = class {
    constructor(nm,id) {
        this.name = nm;
        this.id = id;
    }
    getDetails() {
        return `${this.name}  ::  ${this.id}`;
    }    
};

let bob = new PersonC("Bob", 123);
console.log(bob.getDetails(), bob.name);//Expected output for 'bob.getDetails() = Bob :: 123', expected output for 'bob.name = 'Bob'

//-------------------------------------------------------------------------

let EmployeeC = class extends PersonC {
    constructor(nm, id, salary) {
        super(nm, id);
        this.salary = salary;
    }
    employeeInfo() { //exists on the prototype of EmployeeC
        return `${this.name}  ::  ${this.id}  ::  ${this.salary}`;
    }    
};

let noomi = new EmployeeC("Noomi", 456, 8500000); 
console.log(noomi.employeeInfo());
console.log(noomi.getDetails());

//-------------------------------------------------------------------------


let obj = {
	"name": "hackinbits",
	"type": "website"
}
let newArray = Object.entries(obj) //Object.entries converts object to array

let map1 = new Map(newArray);
console.log(map1.get('name'));//expected output = 'hackinbits'

//-------------------------------------------------------------------------
var objects = [{
    id: 1,
    name: "one"
  }, {
    id: 2,
    name: "two"
  }, {
    id: 3,
    name: "three"
  }];
  
  var objectMap = new Map(objects.map(obj => [obj.id, obj]));//Converts an array into a map
  console.log(objectMap.get(1));//Expected output = id: 1, name: one