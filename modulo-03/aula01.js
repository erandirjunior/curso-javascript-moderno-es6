// Introdução a Template Literals 

 const ireland = {
        live: 'Dublin',
        love: 'Galway'
    };

const text = 'Eu moro em ' + ireland.live + ' e sou apaixonado por ' + ireland.love+'!';

console.log(text); //Eu moro em Dublin e sou apaixonado por Galway!

const newText = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}!`;

console.log(newText); //Eu moro em Dublin e sou apaixonado por Galway!

const fruits = 'bannana' 
                + `\n`
                + 'orange'
                + `\n`
                + 'apple';

console.log(fruits); //bannana   orange   apple

const newFruits = 
`bannana
orange
apple`;

console.log(newFruits); //bannana   orange   apple