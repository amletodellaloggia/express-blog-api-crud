// Importo l'array dei post
const posts = require('../routers/posts.js');

// Index
const index = (req, res) => {
	res.json(posts);
};

// Show
const show = (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find(item => item.id === id);
	res.json(drink);
};

// Create
const create = (req, res) => {
	res.send('Creazione nuovo post');
};

// Update
const update = (req, res) => {
	const id = parseInt(req.params.id);
	res.send(`Modifica totale del post con ID:${id}`);
};

// Modify
const modify = (req, res) => {
	const id = parseInt(req.params.id);
	res.send(`Modifica parziale del post con ID:${id}`);
};

// Destroy
const destroy = (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find(item => item.id === id);
	posts.splice(post.indexOf(post), 1);
	res.sendStatus(204);
};
