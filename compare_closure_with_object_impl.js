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

function newPerson(name){

	const msg = `Hi ${name}`;

	return {
		greet() {
			console.log(msg);
		},
		greetAsync() {
			setTimeout(() => {
				console.log(msg);		
			},1000)
		}
	}

}

let Sofikul = newPerson('Sofikul');
Sofikul.greet();
Sofikul.greetAsync();


//same implementation using object property, not closure

function Person(name){
	this.msg = `Hi ${msg}`;
}

Person.prototype.greet = () =>{
	console.log(msg);
}

Person.prototype.greetAsync = () =>{
	let self = this;
	setTimeout(() => {
		console.log(msg);		
	},1000)
}

let p = new Person('Raja');
p.greet();
p.greetAsync();


//https://howtonode.org/why-use-closure
//https://howtonode.org/why-use-closure

