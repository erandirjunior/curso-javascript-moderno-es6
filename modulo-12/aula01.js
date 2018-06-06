// Introdução ao Proxy -> é uma forma de definir comportamentos diferentes para métodos dentro de um objeto

let obj = {
	name: 'Erandir',
	age: 22
};

let proxy = new Proxy(obj, {
	get(target, name) {
		console.log('Alguém está pedindo meu nome!');
		return target[name];
	},
	set(target, name, value) {
		console.log('Alguém está mudando o nome!');
		target[name] = value;
	}
});

console.log(proxy.name); //Alguém está pedindo meu nome!      Erandir

console.log(proxy.name = 'Junior'); //Alguém está mudando o nome!

console.log(proxy.name); //Alguém está pedindo meu nome!      Junior