/* javascript makes two passes on the first it reads and registers all the variables.
    -during first pass it essentially is looking for anything on left side of assignment operator (=) 
    -during second pass the numbers or string or whatever is assigned to the var next to it. 
    -
*/
//console.log(name) this wouldn't work because the value hasn't been assigned yet 
let name = "Justin";
console.log(name);

b();

function b() {
    console.log("I have been hoisted")
}//this works because on the first pass the info in the function was recorded aka "hoisted"

console.log(name1);
var name1 = "justin";

/* 
    ledger:
        -variable for name whos value is currently undefined
        -function called b, that does {.. code stuff ..}
*/