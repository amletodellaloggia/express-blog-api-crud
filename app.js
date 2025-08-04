// Importo express, ne chiamo la funzione, salvo il valore nella variabile app e definisco la port '3000'
const express = require("express");
const app = express();
const port = 3000;

// Importo il file router per i post
const postsRouter = require(`./routers/posts.js`);

// Definisco il middleware per le img (file statici)
app.use(express.static(`imgs/`));

// Definisco rotta base
app.get("/", (req, res) => {});

// Aggiungo il router
app.use("/posts", postsRouter);

// Faccio in modo che app rimanga in ascolto sulla porta definita
app.listen(port, () => {
  console.log(`Sto ascoltando sulla porta ${port}...`);
});
