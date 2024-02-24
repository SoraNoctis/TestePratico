const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para parsing de JSON

let contatos = []; // Este array irá armazenar nossos contatos

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// CREATE
app.post('/contatos', (req, res) => {
    const contato = req.body;
    // Adicione validação aqui
    contatos.push(contato);
    res.send('Contato adicionado com sucesso.');
});

// READ
app.get('/contatos', (req, res) => {
    res.json(contatos);
});

// UPDATE
app.put('/contatos/:id', (req, res) => {
    const id = req.params.id;
    const novoContato = req.body;
    // Atualize o contato com o id fornecido
});

// DELETE
app.delete('/contatos/:id', (req, res) => {
    const id = req.params.id;
    // Delete o contato com o id fornecido
});
