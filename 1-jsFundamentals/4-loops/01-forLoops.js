let i = 7;

//     (1)   (2)     (3)
for (i = 0; i < 10; i++){
    console.log(i);
}

console.log(i);

/*
1-Initial expression - run once before the loop starts
2-condition- loop runs until the condition evaluates to false
3- increment expression - run once after each iteration of the loop

*/

let x = 6;

for (x = 0; x <= 20; x = x + 2){
    console.log(x);
}


for (a = 10; a >= 0; a--){
    console.log(a);
}

for(let x = 10; x >= 0; x--){
    console.log(x);
}


for(x = 0; x >= -24; x -= 2){
    console.log(x);
}

const name = "Justin";

for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}

var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17','18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
var sum = 0;

for (i = 0; i < nums.length; i++){
    sum += parseInt(nums[i]);
}

console.log(sum);

let sum = 0;

for(let i = 1; i <=50; i++){
    sum += i
}

console.log(sum);