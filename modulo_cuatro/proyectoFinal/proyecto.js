const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('api/random', (req, res)=>{
    const randomIndex = Math.floor(Math.random() * frases.length);
    res.json({frase: frases[randomIndex]});
})

app.post('/api/add', (req, res) => {
    const newPhrase = req.body.phrase;
    if (newPhrase) {
        phrases.push(newPhrase);
        res.status(201).json({ message: 'Frase añadida', phrases });
    } else {
        res.status(400).json({ message: 'Frase no válida' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});