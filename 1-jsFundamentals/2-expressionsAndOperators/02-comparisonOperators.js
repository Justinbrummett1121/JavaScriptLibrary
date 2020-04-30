//equal (does not check for datatype equality)
console.log("3" == 3);

//strict equal (does check for datatype)
console.log("3" === 3);

//not equal
console.log("3" != 3);

//strict not equal 
console.log("3" !== 3);

//greater than
console.log(3 > 1);

//less than
console.log(3 < 1);

//greater than or equal to
console.log(5 >= 3);

//less than or equal to
console.log(5 <= 4);

//and
console.log(1 > 0 && 2 > 1);

//or
console.log(1 > 0 || 2 > 7)





let fb = 15;

if(fb % 3) {
    console.log("Fizz");
} else if (fb % 5) {
	console.log("Buzz");
} else if (fb % 3 && fb % 5) {
	console.log("Fizz Buzz");
} else {
	Conosle.log("Better luck next time!");
}