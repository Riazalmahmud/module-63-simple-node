const express = require('express');
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())
app.use(express.json())
const users = [
    { id: 0, name: "iPhone", price: 10000, ram: "6md" },
    { id: 1, name: "samsung", price: 10000, ram: "8md" },
    { id: 2, name: "google", price: 10000, ram: "8md" },
    { id: 3, name: "microsoft", price: 10000, ram: "12md" },
    { id: 4, name: "walton", price: 10000, ram: "4md" }
]


app.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length
    users.push(newUser);
    console.log('your post hitted')
    // req.send("post got the gitted")
    // req.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/', (req, res) => {
    res.send('Hello node js! ')
})

app.get('/users', (req, res) => {

    const search = req.query.search
    if (search) {
        const searchResult = users.filter(users => users.name.toLowerCase().includes(search))
        res.send(users)
    }
    else {
        res.send(users)
    }

})

app.get('/users', (req, res) => {
    console.log(req.query);
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})