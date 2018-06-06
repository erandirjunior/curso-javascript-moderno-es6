// Melhorias nos arrays

// Array.from() -> cria uma nova instância de um Array, para tipos array-like é útil pois elimina a necessidade de utilizar prototypes

const text = 'Junior';

console.log(Array.from(text));

const list = document.querySelectorAll('#list li');

const listArray = Array.from(list);

console.log(listArray);

const names = listArray.map(name => name.textContent);

console.log(names); //(3) ["Erandir", "João", "Marcos"]