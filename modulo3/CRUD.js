const express = require('express')
const app = express()
// FAKE DATABASE
let books = []

app.use(express.json())


// CREATE
app.post('/books', (req, res) => {
    const {id, title} = req.body
    const book = {id, title}
    books.push(book)
    return res.status(201).json(book)
})

// READ
app.get('/books', (req, res) => {
    const allBooks = books
    return res.status(200).json(allBooks)
})
app.get('/books/:book_id', (req, res) => {
    const {book_id} = req.params
    const book = books.find((books) => book.id === book_id)
    if(!book) res.status(404).json("Não encontrado")
    return res.status(200).json(book)
})

// UPDATE
app.patch('/books/:book-id', (req, res) => {
    const {id, title} = req.body
    const { book_id } = req.params
    const book = books.find(book => book.id === book.id)
    book.id = book.id
    book.title = title ? title : book.title
    return res.status(200).json(book)
})

// DELETE
app.delete('/books/:book_id', (req, res) => {
    const { book_id } = req.params
    const filterBook = books.filter(book = book.id !== book_id)
    books - filterBook
    return res.status(204).json
})

//PORTA
app.listen(3000, () => {
    console.log('Servidor rodando!')
})