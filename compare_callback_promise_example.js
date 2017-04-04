/**
Same task can be done by callback and promise example
I am showing the two way below -
**/

//This is one example of callback

const fs = require('fs');
const Path = require('path');

fs.readFile(Path.join(__dirname, 'text1.txt'), (err, data) => {
	console.log(`text1: ${data}`);
	fs.readFile(Path.join(__dirname, 'text1.txt'), (err, data) => {
		console.log(`text2: ${data}`);
		fs.readFile(Path.join(__dirname, 'text1.txt'), (err, data) => {
			console.log(`text3: ${data}`);
			fs.readFile(Path.join(__dirname, 'text1.txt'), (err, data) => {
				console.log(`text4: ${data}`);
				fs.readFile(Path.join(__dirname, 'text1.txt'), (err, data) => {
					console.log(`text5: ${data}`);
					fs.readFile(Path.join(__dirname, 'text1.txt'), (err, data) => {
						console.log(`text6: ${data}`);
					})
				})

			})
		})
	})
})

//Promise

const Promiseb = require('bluebird');
const fsPromise = Promiseb.promisifyAll(fs);

fsPromise.readFileAsync(Path.join(__dirname, 'text1.txt'))
	.then((data) => {
		console.log(`text1 promise: ${data}`);
		return fsPromise.readFileAsync(Path.join(__dirname, 'text1.txt'));
	}).then((data) => {
		console.log(`text2 promise: ${data}`);
		return fsPromise.readFileAsync(Path.join(__dirname, 'text1.txt'));
	}).then((data) => {
		console.log(`text3 promise: ${data}`);
		return fsPromise.readFileAsync(Path.join(__dirname, 'text1.txt'));
	}).then((data) => {
		console.log(`text4 promise: ${data}`);
		return fsPromise.readFileAsync(Path.join(__dirname, 'text1.txt'));
	}).then((data) => {
		console.log(`text5 promise: ${data}`);
		return fsPromise.readFileAsync(Path.join(__dirname, 'text1.txt'));
	}).then((data) => {
		console.log(`text6 promise: ${data}`);
	}).catch((err) =>{
		console.log(`${err}`);
	});


/**
Advantages of promise over callback:

1. Promise is a syntactic sugar added in ES6
Using promise we can write asynchronous code in a syncronous way.
It helps to avoid callback hell, increase readability.

2. Error can be handled better way in promise.

3. Chaining of different asynchronous work is syntactically very easy to write.

**/
