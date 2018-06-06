// Melhorias nos arrays

// Array.of() -> cria um array através com n valores passados

console.log(Array.of(1, 4, 5, {})); //(4) [1, 4, 5, {…}]

// Array.find() -> retorna o primeiro valor que reponde a determinada condição

const data = [
    {
        name: 'Willian',
        age: 26,
        city: 'Dublin'
    },
    {
        name: 'Jonas',
        age: 22,
        city: 'Cologne'
    }
];

const sampleArray = [4, -5, -1];

const underZero = sampleArray.find(x => x < 0);

console.log(underZero); //-5

// Array.findIndex() -> retorna o index dp primeiro valor que reponde a determinada condição

const underZeroIndex = sampleArray.findIndex(x => x < 0);

console.log(underZeroIndex); //1

const will = data.find(person => person.name === 'Willian');

const willIndex = data.findIndex(person => person.name === 'Willian');

console.log(will); //{name: "Willian", age: 26, city: "Dublin"}

console.log(willIndex); //0

// Array.fill() -> preenche um array

const arr = new Array(50);

arr.fill('lol');

console.log(arr); //(50) ["lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol", "lol"]

console.log(arr.fill('hoo', 3)); //(50) ["lol", "lol", "lol", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo"]

console.log(arr.fill('aah', 6, 10)); //50) ["lol", "lol", "lol", "hoo", "hoo", "hoo", "aah", "aah", "aah", "aah", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo", "hoo"]