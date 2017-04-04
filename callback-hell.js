//This is one example of callback hell

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

//This can be overcome by modularization
//better by promise, synchronous style of asynchronous programing













