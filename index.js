const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const courses = require('./data/data.json')

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Learning world Running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params?.id;
    const course = courses.find(item => item.id == id)
    res.send(course)
})


app.get('*', (req, res) => {
    res.send([])
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})