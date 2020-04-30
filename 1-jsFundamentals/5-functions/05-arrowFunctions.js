// variable    fat arrow
    let hi    =  ()  =>  {

    }


    //arrow functions were introduced in es6. they are basically a more concise way to write function expressions
    //this means arrow functions do not get hoisted

    //BLOCK BODY
    let hi = () => {
        console.log('hi');
        //lots of code goes here
    }
    //NOTE!:block body arrow functions must have a return (if you want to get back info ) in the body of the function 
    //(return must be in between the curly braces)

    //CONCISE BODY
    let hi = () => {console.log('hi'); console.log(5 +10)}

    hi()
    //NOTE: concise body arrow functions return by default


    let greeting = name => {
        console.log(`Greetings, ${name}`);
    }

    greeting('Justin');
    //NOte: when you have no or multiple parameters you must include parenthesis; however when you havea single parameter the parenthesis are optional 