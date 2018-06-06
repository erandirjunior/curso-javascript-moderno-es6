// Usando o Spread dentro de funções

function makeSandwich(bread, cheese, sauce) {
	console.log(`Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
}

const ingredients = ['white', 'cheddar', 'barbecue'];

makeSandwich(...ingredients); //Your sandwich with white bread, cheddar cheese and barbecue is done!