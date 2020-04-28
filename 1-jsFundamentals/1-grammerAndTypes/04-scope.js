//scope is where things find themselves in the lines of code
/* Var is scoped to the nearest function block, meaning it looks for a functions curly braces and scopes to the nearest one, if it is not inside curly braces it is made a global variable
It wont leak out of the function block, but if you have nested code blocks in your function. they can leak out of that code block into the functions*/