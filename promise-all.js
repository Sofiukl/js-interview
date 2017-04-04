const Promiseb = require('bluebird');
const fs = Promiseb.promisifyAll(require('fs'));
const Path = require('path');

const readFileText1 = fs.readFileAsync(Path.join(__dirname,'text1.txt'), 'utf8');
const readFileText2 = fs.readFileAsync(Path.join(__dirname,'text2.txt'), 'utf8');
const readFileText3 = fs.readFileAsync(Path.join(__dirname,'text3.txt'), 'utf8');


Promise.all([
	readFileText1,
	readFileText2,
	readFileText3
]).then((result) => {
	result.forEach((content,index) => {
		console.log(content);
	})
})