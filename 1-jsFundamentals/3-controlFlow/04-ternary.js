let num = 6;

(num > 0) ? console.log("yes") : console.log("no");

if (num > 0) {
    console.log("yes");
} else {
    console.log("no");
}

//the two things above are doing the exact same thing 

let num = 6
//this didn't work but was less efficient anyway
(num == 0) ? console.log("hello") : (num < 0) ? console.log("hi") : console.log("goodbye");



let fb = 22;

if (fb % 3 == 0 && fb % 5 == 0) {
    console.log("Fizz Buzz");
} else if (fb % 3 == 0) {
    console.log("fizz");
} else if (fb % 5 == 0) {
    console.log("Buzz");
}

let fb = 15;

if(fb % 3 == 0 && fb % 5 == 0) {
    console.log("Fizz Buzz");
} else if(fb % 3 == 0) {
    console.log("Fizz");
} else if(fb % 5 == 0) {
    console.log
}