const greet = (msg) => {
	console.log(msg)
}

const greeter = (name) => {
	return `Hi ${name}`;
}

const msg = greeter('Sofikul');
greet(msg);

/**
Here the msg is exposed to outside world.
Also if we need more information inside greet function later we need to pass
that information later as an argument. So this has a impact.
In stead if we use closure then our life will be easy.

**/

const greeterModified = (name) => {

	let msg = `Hi ${name}`;

	return function greet() {
		console.log(msg);		
	}
}

const greetModified  = greeterModified('Sofikul');
greetModified();

/**
The closure has access to the outer function's variables.
We can implement this using object factory also.
Lets check that example.
**/



