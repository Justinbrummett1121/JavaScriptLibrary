//used to loop over things that are itterable or able to be gone through with numbers???

let student = {
    name: "peter",
    awesome: true,
    degree: "javascript",
    week: 1
}

for (let item of student){
    console.log(item);
}

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for(let cat of catArray){
    console.log(cat);
}

//for of loops are used on elements that have indecies(number keys) array are these.
//for in loops grab the keys or representation best for objects
//for of loops grab the values but there has to be a number associated with the key for it to be grabbable so an object wont work but an array will