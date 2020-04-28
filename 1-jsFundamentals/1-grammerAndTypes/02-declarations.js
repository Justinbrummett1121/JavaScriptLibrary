let a = 2;

     let     b    =     1
/*   (1)    (2)  (3)  (4)

1-keyword to denote variable
2-Variable Name: what we choose to name that variable
3-Assignment Operater: assigns value to variable
4-Variable Value: 

 */


 console.log(a  + b);

/*
     notes on variables: 
        -a variable must begin with a letter, underscore, or dollar sign,
        -numbers may follow the above characters, but cannot come first.
        -Javascript is case sensitive  - hello and Hello are different variables
        -no spaces are allowed in variable names.
        -camelCase is the best practice, for naming variables.
                -cameCase, snake_case, PascalCase 
                -This is the three different types of casing used in coding each an example of itself.
*/

//below are the three keywords for variables

var c = 1;
let d = 2;
const e = 3;  //value must remail constant

/*
    Declarations are the LEFT side of a variable
        -it is in simple form: let x 
        
    Initializations are on the Right side of a variable
        -it sets the value of the variable
        -it incorporates the variable name, the assignment operator, and the value
*/

let x = 20;
console.log(x)

x = 10;
console.log(x)


x = 33;
console.log(x)

let today = "First day"
let mood = "Happy"
console.log(today, mood);
