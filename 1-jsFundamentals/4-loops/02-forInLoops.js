let student = {
    name: "peter",
    awesome: true,
    degree: "javascript",
    week: 1
}

for (let item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for(let cat in catArray){
    console.log(cat);
    console.log(catArray[cat])
}

//challenge below to capitlize first letter 

let name = "dOnOvAn";
let capName;
for (let l in name){
    if(l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}
console.log(capName);