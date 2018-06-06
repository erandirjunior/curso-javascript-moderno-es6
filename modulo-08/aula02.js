// Exemplo real de promises

var posts = fetch('https://willianjusten.com.br/search.json');

console.log(posts);

posts
	.then(data => data.json())
	.then(data => console.log(data))
	.catch(error => console.log(error));