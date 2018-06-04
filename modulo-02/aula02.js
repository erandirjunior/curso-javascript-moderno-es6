// Arrow Function e o lexical 'this'

const btn = document.querySelector('[data-js="btn"]');

btn.addEventListener('click', () => {
	console.log(this);
});

const sandwich = {
        bread: 'white',
        cheese: 'cheddar',
        prepare: function() {
            return `I want a sandwich with ${this.bread} bread and ${this.cheese} cheese!`;
        },
        make: function() {
            window.setTimeout(() => {
                console.log( this.prepare() );
            }, 500);
        }
    };
    
    const btn2 = document.querySelector('[data-js="btn2"]');
    
    btn2.addEventListener('click', function() { sandwich.make() });