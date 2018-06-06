// Default Parameters

function hello(name = 'Erandir', surname = 'Junior') {
	console.log(`Hello ${name} ${surname}! How are you?`);
}

hello(); //Hello Erandir Junior! How are you?

hello('Pedro', 'Silva'); //Hello Pedro Silva! How are you?

hello('Marcos'); //Hello Marcos Silva! How are you?