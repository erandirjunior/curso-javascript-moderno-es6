// Rest Params

function multiply(mult, ...args) {
	return args.map(arg => arg * mult);
}

console.log(multiply(5, 1, 2, 3)); //(3) [5, 10, 15]