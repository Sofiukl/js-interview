/**
Closure is a function within another scope that has access to all variables
within outer scope. The closure has three scope chain -
1. access to its own varibales
2. access to outer function's variables
3. access to the global variables

Points to remember about Closures,
1. Whenever you use a function inside another function, a Closure is used.
2. Closure in JavaScript is like keeping a copy of all the local variables.
3. A Closure is created just on entry to a function and the local variables are added to that Closure.
4. A new set of local variables are kept every time a function with a Closure is called.

Reference:
(a). https://howtonode.org/why-use-closure
(b). 
**/

//Example 1: -


let oneFunc = () => {
	var a = 1;
	return function() {
		console.log(`a: ${a}`);
	}
}


const closure = oneFunc();
closure();

//Here the inner function closure has access to the outer function's variable a

//Example 2: -






