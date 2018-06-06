// Novos métoos para Strings

let text = 'lorem ipsum dolor sit omet';

// startsWith() -> verifica se uma string começa com determinado valor, podendo ser passado a partir de que indice a verificação é feita

console.log(text.startsWith('lorem')); //true

console.log(text.startsWith('rem', 2)); //true

// endsWith() -> verifica se uma string termins com determinado valor, podendo ser passado até quando a verificação é feita

console.log(text.endsWith('omet')); //true

console.log(text.endsWith('ome', 25)); // true

// repeat() -> repete uma string n vezes

console.log(text.repeat(10)); //lorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit ometlorem ipsum dolor sit omet

// includes() -> verifica se uma estring está dentro da outra

console.log(text.includes('dolor')); //true

console.log(text.includes('text')); //false