//Boolean- two possible values "true or false"
let on = true;
console.log(on);

let off = false;


//Null - null is an empty value. Think of it as an empty container: nothing is in there, but it still exists as a space to fill 

let empty = null;
console.log(empty);



//Undefined - default value when a variable is not initialized

let undef = undefined;
let correct;  

console.log(undef, correct);


//Numbers 

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");
console.log(typeof aNumber);

//Strings - strings are datatypes used to represent text and are either wrapped in single quotes  '' double quotes (""), or string interpalation (``)
let stringOne = 'single quotes';
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree)

let first = 1050 + 100; 
let second = "1050" + "100";
console.log(typeof first);
console.log(typeof second);

let third = 1050 + "100";
console.log(third);

//Objects - objects are used to store many values instead of a singular value

let frodo = {
   let race = "hobbit", 
   let rings = 1,
   let cloack = true
}
let frodo = {
    race: "hobbit", 
    rings: 1,
    cloack: true
}
//these two examples do the same thing but the second isn't possible because you don't break it down in an object
console.log(frodo);

/*Arrays - arrays are containers that hold lists of items

let list = [      "item1",     "item2",     "item3"];
    (1)   (2)           (3)

    1- name of array
    2- arrays are denoted by square brackets
    3- notice each value is seperated by a comma 
*/
//              (1),     (2), (3)
let burritos = ["large", 4, true,];
console.log(burritos);
console.log(typeof burritos);

let burritos = {
    1: "large",
    2: 4,
    3: true
};

// the two examples above are doing the same thing

let firstName = "Justin";
let lastName = "Brummett";
const houseNumber = 1017;
let street = "Greenbriar Dr";
let city = "Anderson";
let state = "IN";
const zipcode = 46012;
console.log(typeof firstName)
console.log(houseNumber, street, city, state, zipcode);


let myName = "Justin";
console.log(myName.length);

console.log(myName.toUppercase())

let home = "My home is greenwood";
console.log(home.includes("greenwood"))

let sent = 'This sentence will be split into individual parts ';
var res = sent.split();
console.log(sent.split(" "));
