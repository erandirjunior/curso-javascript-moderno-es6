// Shorthand Properties

let firstName = 'Erandir';
let surname = 'Junior';
let age = 22;

const person = {
	firstName,
	surname,
	age,
	hello() {
		console.log('Hello');
	}
};

console.log(person); //{firstName: "Erandir", surname: "Junior", age: 22, hello: ƒ}

person.hello(); //Hello