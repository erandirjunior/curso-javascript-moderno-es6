// import método from 'biblioteca'
// * carrega tudo da lib
// as -> alias para o método (novo nome)
import { union as juntaTudo, uniq as osMesmos } from 'ramda';
import soma, { sub, multiplicacao, div as dividir, PI } from './utils';
import react from 'react';
import reactDOM from 'react-dom';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, -1];

const arr3 = juntaTudo(arr1, arr2);

const arr4 = osMesmos(arr1);

console.log(arr3); //(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1]

console.log(arr4); //(6) [1, 2, 3, 4, 5, 6]

console.log(soma(5, 3)); //8

console.log(sub(5, 3)); //2

console.log(multiplicacao(5, 3)); //15

console.log(dividir(6, 3)); //2

console.log(PI); //3.14