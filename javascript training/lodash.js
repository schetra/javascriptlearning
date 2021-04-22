//What is Lodash? 
//Lodash is Javascript library developed by John-David Dalton which focuses on delivering high-performing Javascript functions and more. Lodash can be used in the front end and in the back end as well.

//Install via npm
npm install --save lodash

//Install lodash for angular
npm install --save-dev @types/lodash

//Import to your component angular
import * as _ from 'lodash';

//Install lodash into React component
import _ from 'lodash';

//Test whether the Name is a String or not
const _ = require('lodash');
const name = "tray";
if (_isString(name)){
    console.log(name);
}
else {
    console.log("");
}