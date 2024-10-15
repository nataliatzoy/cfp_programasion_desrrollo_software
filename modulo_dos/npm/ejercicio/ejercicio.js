const express = require('express');
const app = express();
const port = 8888;
const poke = [
  {  image: "",id: 1,  name: 'Bulbasaur', power: "Plant · Poison" },
  {  image: "",id: 2,  name: 'Ivysaur', power: "Plant · Poison" },
  {  image: "",id: 3,  name: 'Venusaur', power: "Plant · Poison" },
  {  image: "",id: 4,  name: 'Charmander', power: "Fire" }
];


app.get('/', (req, res) => {
  res.json(poke[1]); 
});

app.get('/pokemon/:id', (req, res) => {
  
  const id = parseInt(req.params.id);
  const Pokes = poke.find(p => p.id === id);


  if (Pokes) {
    res.json(Pokes);
  } else {
    res.status(404).send('Pokémon no encontrado');
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


