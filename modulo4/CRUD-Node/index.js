const express = require('express')
const repository =  require('./repository')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Página Inicial')
})

app.get('/filmes', (req,res) => {
    res.send(repository.getFilmes())
})

app.post('/filmes', (req,res) => {
    res.send(repository.createFilme(req.body))
})

app.put('/filmes', (req,res) => {
    const id = req.query.id
    const filme = req.body
    res.send(repository.updateFilme(id, filme))
})

app.delete('/filmes', (req,res) => {
    const id = req.query.id
    res.send(repository.deleteFilmes(id))
})

// Porta
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})