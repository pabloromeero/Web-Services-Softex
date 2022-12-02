let filmes = [
    { nome: 'Vingadores'},
    { nome: 'Batman'},
    { nome: 'Liga da Justiça'}
]

const getFilmes = () => {
    return filmes
}

const getFilmeById = (id) => {
    return filmes[id]
}

const createFilme = (novoFilme) => {
    filmes[id] = filmes
    return filmes[id]
}

const updateFilme = (id, filme) => {
    filmes[id] = filme
    return filmes[id]
}

const deleteFilme = (id) => {
    eleToRemove = filmes[id]
    filmes = filmes.filter(function (elemento) {
        return elemento.nome != eleToRemove.nome
    })
    return filmes
}

module.exports = {
    getFilmes,
    getFilmeById,
    createFilme,
    updateFilme,
    deleteFilme,
}