// Manipulando múltiplas promises

const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ currency: 'euro', value: 3.50 });
    }, 2000);
});

const countries = new Promise((resolve, reject) => {
	resolve(['Ireland', 'England', 'Scotland']);
});

// all() -> resolve todas as promises

Promise
	.all([currency, countries])
	.then(reponses => {
		console.log(reponses); //(2) [{…}, Array(3)]
	})
	.catch(error => console.log(error));

// race() -> funciona como o all() com a diferença que quando o primeiro resolve for feito, ignora todas as outras promises

Promise
	.race([currency, countries])
	.then(reponses => {
		console.log(reponses); //(3) ["Ireland", "England", "Scotland"]
	})
	.catch(error => console.log(error));