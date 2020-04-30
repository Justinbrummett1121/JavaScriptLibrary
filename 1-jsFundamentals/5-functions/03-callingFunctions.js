function hi(){
    console.log("HI");
}

hi();

console.log(hi);

console.log(hi());


// challlenge create a function that, when invoked, lists out the numbers 1-10
function lists(){
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }
};

lists();


let arr = ["This", "is", "really", "cool"];


function clack(){
    for(let item of arr){
        console.log(item);
    }
}
clack()