let food = ["Pecan pie", "Shrimp","Quesadilla", "Cheese cake", "Hotdog"];

for(let i = 0; i < food.length; i++){
    console.log(food[i]);
};

food.forEach(foodItem => console.log(foodItem))


food.forEach((foodItem, i) => console.log(i, foodItem));

let movies = ["Step Brothers", "50 First Dates", "Happy Gilmore", "Harry Potter and The Prisoner of Azkaban"]

movies.push("The Other Guys");


movies.splice(1, 1, "Deadpool")


movies.forEach((movie, i) => console.log(i, movie));

