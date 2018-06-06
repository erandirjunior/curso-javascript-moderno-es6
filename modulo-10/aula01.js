// Introdução Symbols

// Imutável e único

let foo = Symbol('descrição');
let bar = Symbol('descrição');

console.log(foo); //Symbol(descrição);
console.log(foo == bar); //false

let obj = {
	[Symbol('name')]: 'Erandir',
	[Symbol('age')]: 22,
	city: 'Fortaleza'
};

console.log(Object.keys(obj)); //["city"]

console.log(Object.getOwnPropertySymbols(obj)); //(2) [Symbol(name), Symbol(age)]

const symbols = Object.getOwnPropertySymbols(obj);

const data = symbols.map(sym => obj[sym]);

console.log(data); //["Erandir", 22]