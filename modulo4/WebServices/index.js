const express = require('express')
const app = express()
let videos = []

app
    .post('/videos', (req, res) => {
        const {id} = req.body
        const video = {id}
        videos.push(video)
        return res.status(200).json({message: 'Vídeo inserido com sucesso!'})
    })

    .delete('/videos/:video_id', (req, res) => {
        const { video_id } = req.params
        const filterVideo = videos.filter(video = video.id !== video_id)
        books - filterVideo
        return res.status(204).json({message: 'Vídeo deletado com sucesso!'})
    })


app.listen(3000, () => {
    console.log('Servidor rodando!')
})