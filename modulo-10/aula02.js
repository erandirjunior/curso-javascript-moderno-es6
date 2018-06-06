// Iterators e Iterables - for...of

var txt = 'Ireland';
var it = txt[Symbol.iterator]();

console.log(it.next()); //{value: "I", done: false}
console.log(it.next()); //{value: "r", done: false}
console.log(it.next()); //{value: "e", done: false}
console.log(it.next()); //{value: "l", done: false}
console.log(it.next()); //{value: "a", done: false}
console.log(it.next()); //{value: "n", done: false}
console.log(it.next()); //{value: "d", done: false}

for (letter of txt) {
	console.log(letter); //I    r    e   l     a     n     d
}

for (letter of txt) {
	console.log(letter); //I    r    e   l     a
	if (letter === 'a') break;
}