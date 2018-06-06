// Fazendo swap de variáveis com destructuring

let a = 42;
let b = 20;

console.log(a); //42
console.log(b); //20

[a, b] = [b, a];

console.log(a); //20
console.log(b); //42
