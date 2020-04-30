let hi = () => {
    // 1
    return 'hi'
}

//return allows us to use info from a function outside of the metaphorical walls of the curly braces

//     2        3
let greeting = hi();


/* 
    1- the keyword that brings the data out of our function 
    2- a new variable to hold the value of the return
    3- when called, the function becomse the value of the return
*/

console.log(greeting);


function name(firstName){
    return `Hello, ${firstName}`;
}



let greetedName = name('Leia Organa')

console.log(greetedName);

//new thing


function capitalizeName(name){
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

let correctName = capitalizeName('jErOme');

console.log(correctName);

//new thing

function areaOfRectangle(length, width){
    let area = length * width;
    return area;
}

let width = 5;
let length = 5;

let newArea = areaOfRectangle(length, width);

console.log(newArea);


//new thing CHALLENGE

function tipAmount(total, tipPercent){
    let tip = total * tipPercent;
    return tip;
}

let total = 43
let tipPercent = .20
let newTipAmount = tipAmount(total, tipPercent);

console.log(newTipAmount);