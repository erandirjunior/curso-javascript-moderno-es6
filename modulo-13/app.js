// import método from 'biblioteca'
// * carrega tudo da lib
// as -> alias para o método (novo nome)
import { union as juntaTudo, uniq as osMesmos } from 'ramda';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, -1];

const arr3 = juntaTudo(arr1, arr2);

const arr4 = osMesmos(arr1);

console.log(arr3); //(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1]

console.log(arr4); //(6) [1, 2, 3, 4, 5, 6]