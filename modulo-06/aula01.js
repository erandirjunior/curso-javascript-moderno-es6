// Intordução ao Destructuring

var data = {
    name: 'Willian',
    surname: 'Justen',
    age: 25,
    blog: 'https://willianjusten.com.br',
    social: {
        twitter: '@Willian_Justen',
        facebook: '/willianjusten'
    }
};

console.log(data.name); //Willian
console.log(data.surname); //Justen
console.log(data.social.facebook); ///willianjusten

const {name, surname} = data;

console.log(name); //Willian
console.log(surname); //Justen

const {twitter, facebook} = data.social;

console.log(twitter); //@Willian_Justen
console.log(facebook); ///willianjusten

const {facebook: fb} = data.social;

console.log(fb); ///willianjusten

const {city = 'Dublin', name: newName = 'Jonas'} = data;

console.log(city); //Dublin
console.log(newName); //William