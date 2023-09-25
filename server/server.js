const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

//ENDPOINT DE USUARIOS
app.get('/usuarios', (req, res) => {
    const usuarios = [
        {id: 1, nome: "João"},
        {id: 2, nome: "Pedro"},
        {id: 3, nome: "José"},
    ];
    res.json(usuarios);

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});