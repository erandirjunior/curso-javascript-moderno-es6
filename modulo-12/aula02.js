// Introdução ao Set -> permite guardar o valor único de um tipo

let mySet = new Set(['erandir', 'jonas', 'marcos']); 

console.log(mySet); //Set(3) {"erandir", "jonas", "marcos"}

console.log(mySet.size); //3

// add() -> adiciona mais um valor e retorna todo o set

console.log(mySet.add('marcio')); //Set(4) {"erandir", "jonas", "marcos", "marcio"}

// delete() -> remove um elemento especifico

console.log(mySet.delete('jonas')); //true

// has() -> verifica se existe determinado valor

console.log(mySet.has('erandir')) //true

console.log(mySet.has('jonas')) //false

// values() -> retorna os valores

let it = mySet.values();

/*console.log(it.next()); //{value: "erandir", done: false}

console.log(it.next()); //{value: "marcos", done: false}

console.log(it.next()); //{value: "marcio", done: false}*/

for (name of it) {
	console.log(name); //erandir    marcos    marcio
}