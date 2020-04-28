let weather = 75;

if(weather < 70) {
    console.log("Wear a jacket.");
} else {
    console.log("No jacket necessary!");
}


let name = "Justin"
let nameHere = "Craig"

if(name == "Justi") {
    console.log(`Hello my name is ${name}`);
} else {
    console.log(`Hello, is your name ${nameHere}?`);
}

//correct attempt
let name = "ZAchARy"

if(name[0] === name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}


//wrong attempt 
let age = 24;

if (age <= 17){
    console.log("Sorry You're too young to do anything.");
} else if (age >= 18){
    console.log("You can vote!");
} else if (age >= 21){
    console.log("You can drink!");
} else (age >= 25){
    console.log("You can rent a car!");
}

// correct attempt 
let age = 24;

if (age >= 25){
    console.log("You can rent a car!");
} else if (age >= 21){
    console.log("You can drink!");
} else if ( age >= 18) {
    console.log("You can vote");
} else {
    console.log("Sorry, you are to young to do anything!");
}



