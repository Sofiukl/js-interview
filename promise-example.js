/**

Promise meaning -
A declaration or assurance that one will do something or that a particular thing will happen.

Definition:
The Promise object is used for asynchronous computations. 
A Promise represents a value which may be available now, or in the future, or never.	

Syntax:

new Promise((resolve,reject) =>{
	if(success){
		resolve();
	}else {
		reject();
	}
})

Description:
A promise is a proxy for a value not necessarily know when its created.
It allow you to associate handler for success or faliure reason.
This lets asynchronous method return values like synchronous method. In stead of immediately returing final value
the asynchronous method return a promise to supply the value in future.

Different states:
a. Pending 			- Initial state
b. Fulfilled 		- Meaning the operation completed successfully
c. Rejected 		- Meaning the opearation failed

'Pending' its the initial state, then states is changed to either Fulfilled or Rejected.

A executor function is passed during the creation of the promise.
This executor function is invoked immediately by the promise implementation. This function normally initiates some asynchronous task
and if the task completed successfully then it called resolve function, if failed then it called reject function.
If an error is thrown in the executor function, the promise is rejected.
The return value of the executor is ignored.

Refer to mozila documentation for details:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

**/

//Example:

const fs = require('fs');
const Path = require('path');
//1. This function returns a promise, hold a value may not be available now, can be available in future
const readFilePromise = () => {
	//initiate some asynchronous expensive task

	return new Promise((resolve,reject) =>{
		return fs.readFile(Path.join(__dirname, 'text1.txt'), 'utf8', (err, content) =>{
			if(err){
				reject(err);
			}else{
				resolve(content);
			}
		});
	})
};

//associate success and faliure handlers
readFilePromise().then((data) =>{
	console.log(`Promise Example : ${data}`);
}).catch((err) =>{
	console.log(`[Error] : ${err}`);
});