// Importo l'array dei post
const posts = require(`../data/posts.js`);

// Index
const index = (req, res) => {
  // res.send(`Invio dell'elenco dei post`)

// Bonus:
const title = req.query.title;
// Array post filtrati
let filteredPosts = posts;
// Verifico valore di title e nel caso lo filtro
if(title){
  filteredPosts = posts.filter(item => item.title.toLowerCase() === title.toLowerCase());
}

  // res.json(posts);
  res.json(filteredPosts);
};

// Show
const show = (req, res) => {
	const id = parseInt(req.params.id);
	const post = posts.find(item => item.id === id);
	// res.send(`Dettaglio del post con ID: ${id}`);

  // Bonus:
  // Verifico se il post non esiste e restituisco errore 404
  if(!post){ res.status(404).json({error: "404 - Pagina non trovata!", message: "Il post non è presente!"})
  };
  res.json(post);
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
  posts.splice(posts.indexOf(post), 1);
  res.sendStatus(204);
  // res.send(`Cancellazione del post con ID:${id}`)
  console.log(posts);
};

module.exports = {
  index,
  show,
  create,
  update,
  modify,
  destroy
};