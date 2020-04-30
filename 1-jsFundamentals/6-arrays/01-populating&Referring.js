//an array is essentially a list

//   (1)  (2)     (3)         (3)          (3)
let list = [    "item1",     "item2",    "item3"]

/*
1-variable name
2-arrays are denoted by square brackets
3-each item in the array must be seperated by a comma
*/
// indecies     (0)      (1)       (2)
let fruit = ["orange", "banana", "apple"];

console.log(fruit[0]);

let students = [
    "mitchell",
    "Bill",
    "Brittany",
    23,
    true,
    ["Hustin", "Amanda", "John", [20, true, "slayde"]]
];



//below you can check to see what sort of class you're using if you put object itll tell you true or false same goes for array or string or anything like that 
console.log(students instanceof Object);
console.log(students[5][1])
console.log(students[5][3][2])