// Arrow Functions

const ireland = ['Dublin', 'Galway', 'Cork'];

const love = ireland.map(function(name) {
	return `I love ${name}!`;
});

console.log(love); //(3) ["I love Dublin!", "I love Galway!", "I love Cork!"]

// Criando Arrow Function

const loveArrow = ireland.map((name) => {
	return `I love ${name}!`;
});

console.log(loveArrow); //(3) ["I love Dublin!", "I love Galway!", "I love Cork!"]

// Quando foor um único parâmetro, não precisa dos parênteses

const loveArrowSingle = ireland.map(name => {
	return `I love ${name}!`;
});

console.log(loveArrowSingle);//(3) ["I love Dublin!", "I love Galway!", "I love Cork!"]

// Quando executar um único comando, não precisa das chave nem da palavra return

const loveArrowOneLine = ireland.map(name => `I love ${name}!`);

console.log(loveArrowOneLine);//(3) ["I love Dublin!", "I love Galway!", "I love Cork!"]

// Encadiando métodos

const loveChain = ireland
	.filter(name => name === 'Dublin')
	.map(name => `I love ${name}!`);

console.log(loveChain); //["I love Dublin!"]