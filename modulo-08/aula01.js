// Introdução a Promises

var defer = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (true) {
			resolve('Hello! It works!');
		} else {
			reject('Error!');
		}
	}, 2000);
});
	

defer
	.then((data) => {
		console.log(data); //Hello It works!
		return 'foo';
	})
	.then((data) => console.log(data)) //foo
	.catch((error) => console.log(error));