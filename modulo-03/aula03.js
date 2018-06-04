// Tagged Template -> uma função que vai percorrer uma template literal

const city = 'Dublin';
const something = 'Guinness';
const otherThing = 'Leprechaums';

function green(template, ...values) {
    return template.reduce((accumulator,actual, i) => {
        return `${accumulator} <span class="green">${values[i - 1].toUpperCase()}</span>${actual}`;
    });
}

const ireland = green`I live in ${city} the city of ${something} and ${otherThing}!`;


document.body.innerHTML = ireland;