const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

// Data
const users = [
    {
      id: 1,
      username: 'octocat',
      name: 'The Octocat',
      repoCount: 8,
      location: 'San Francisco',
    },
    {
      id: 2,
      username: 'torvalds',
      name: 'Linus Torvalds',
      repoCount: 25,
      location: 'Portland',
    },
    {
      id: 3,
      username: 'gaearon',
      name: 'Dan Abramov',
      repoCount: 50,
      location: 'London',
    },
    {
      id: 4,
      username: 'addyosmani',
      name: 'Addy Osmani',
      repoCount: 42,
      location: 'Mountain View',
    },
    {
      id: 5,
      username: 'tj',
      name: 'TJ Holowaychuk',
      repoCount: 150,
      location: 'Victoria',
    },
  ];

//   1
app.get("/users", (req, res) => {
    res.json({users})
})

// 2
app.get("/users/:id", (req, res) => {
    let id = parseInt(req.params.id)
    let userById = users.find((user) => user.id === id)

    if(userById) {
        res.json({userById})
    } else {
        res.status(404).json({message: "User not found"})
    }
})

// Port
app.listen(3000, () => {
    console.log(`Server is running on Port:3000`)
})