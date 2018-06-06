// Criando classes ES6

class Animal {
	constructor(kind, sound) {
		this.kind = kind;
		this.sound = sound;
	}

	hello() {
		console.log(`${this.sound} I'm a ${this.kind}`);
	}

	static info() {
		console.log('This is a static method');
	}

	get name() {
		console.log('My name is Jake');
	}

	set nickName(nick) {
		this.nick = nick;
	}
}

const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'miau');

dog.hello(); //auau I'm a dog
cat.hello(); //miau I'm a cat

Animal.info(); //This is a static method

dog.name; //My name is Jake

dog.nickName = 'teste';