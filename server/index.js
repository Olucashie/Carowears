const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const cities = [
    {
        name: "New York",
        population: 8419000,
        country: "USA",
        landmass: "783.8 km²",
        pictures: ["ny1.jpg", "ny2.jpg"]
    },
    {
        name: "Tokyo",
        population: 13929000,
        country: "Japan",
        landmass: "2,194 km²",
        pictures: ["tokyo1.jpg", "tokyo2.jpg"]
    },
    {
        name: "Paris",
        population: 2148000,
        country: "France",
        landmass: "105.4 km²",
        pictures: ["paris1.jpg", "paris2.jpg"]
    }
];

app.get('/test', (req, res) => {
    res.send(cities)
})

app.listen(port, () =>console.log(`Server is running on port ${port}`))