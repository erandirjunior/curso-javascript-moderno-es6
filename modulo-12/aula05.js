// Introdução ao WeakMap

let obj = {
	name: 'Erandir',
	age: 22
};

let obj1 = {
	name: 'Jonas',
	age: 30
};

let m = new WeakMap();

m.set(obj, 'Info do Erandir');
m.set(obj1, 'Info do Jonas');

console.log(m); //WeakMap {{…} => "Info do Erandir", {…} => "Info do Jonas"}

console.log(m.get(obj1)); //Info do Jonas