// Temporal Dead Zone -> nas varáveis let e const, o hoisting acontece normalmente, mas só podem ser acessadas após receberem um valor, variáveis const recebem valor assim que são criadas

console.log(cat); //Uncaught ReferenceError: cat is not defined

const cat = 'cat';