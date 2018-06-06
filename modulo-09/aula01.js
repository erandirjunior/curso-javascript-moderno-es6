// Herança prototipal

function Animal(kind, sound) {
	this.kind = kind;
	this.sound = sound;
}

const dog = new Animal('dog', 'auau');
const cat = new Animal('cat', 'miau');