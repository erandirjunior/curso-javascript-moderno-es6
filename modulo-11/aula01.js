// Introdução a Generators

function* getNames() {
	yield 'Erandir';
	yield 'Jonas';
	yield 'Gabriela';
}

const names = getNames();

console.log(getNames()); //getNames {<suspended>}

console.log(names.next()); //{value: "Erandir", done: false}

console.log(names.next()); //{value: "Jonas", done: false}

console.log(names.next()); //{value: "Gabriela", done: false}