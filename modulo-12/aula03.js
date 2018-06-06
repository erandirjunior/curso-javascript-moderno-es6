// Introdução ao WeakSet -> semelhante ao set mas só armazena objetos

let obj = {
	name: 'Erandir',
	age: 22
};


let obj1 = {
	name: 'Jonas',
	age: 30
};

let ws = new WeakSet([obj, obj1]);

console.log(ws.has(obj1)); //true

ws.add({type: 'obj'});

ws.delete(obj1);