let food = ["Pecan pie", "Shrimp","Quesadilla", "Cheese cake", "Hotdog"];

for(let foodItem in food){
    console.log(foodItem)
}

food.push("Pizza");
console.log(food);

food.splice(1, 1, "Tacos");
console.log(food);

let removedFood = food.pop();
console.log(removedFood);

food.unshift("nachos");
console.log(food);