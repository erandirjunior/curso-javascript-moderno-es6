// const -> não é imutável

const secretNumber = 28;

const jr = {
	name: 'Junior',
	age: 25
};

console.log(jr); //{name: "Junior", age: 25}

jr.age = 22;

console.log(jr); //{name: "Junior", age: 22}

// Tornando imutável

Object.freeze(jr);

console.log(jr); //{name: "Junior", age: 22}

jr.age = 30;

console.log(jr); //{name: "Junior", age: 22}