// Introdução ao Spread Operator

let front = ['react', 'vue', 'angular'];
let back = ['python', 'ruby', 'nodejs'];

console.log([...'jr']); //(2) ["j", "r"]

console.log(...front); //react vue angular

console.log([...front, 'RxJS', ...back]); //(7) ["react", "vue", "angular", "RxJS", "python", "ruby", "nodejs"]