let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["blue", 'green', 'yellow', 'red', "orange", 'purple'];
console.log(colors.length);

console.log(colors.toString());

console.log(typeof colors);

//below there are two ways to do the challenge the second uses a ternary
let colors = ["blue", 'green', 'yellow', 'red', "orange", 'purple'];

console.log(colors instanceof Array)
colors.reverse();
colors.forEach(color => console.log(color))


(colors instanceof Array) ? console.log(colors.reverse()) : console.log('Not an Array');
colors.forEach(name => console.log(name));

if (colors instanceof )



let colors = ["blUe", 'grEEn', 'yeLLow', 'rEd', "orANGe", 'pURPle'];

colors.forEach(color => console.log(color[0][0].toUpperCase() + color.slice(1).toLowerCase()));
