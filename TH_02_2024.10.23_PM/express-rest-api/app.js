const express = require('express');
const app =express();
const port = 3000;

app.use(express.json());
// GET method
app.get('/users', (req, res) => {
    res.json([
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Jane Smith'
    },
    {
        id: 3,
        name: 'Tory Lanez'
    },
    {
        id: 4,
        name: 'Megan Thee Stallion'
    }
  ]);
});
// POST method
app.post('/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({"message": "User created", user: newUser});
});

//PUT method
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    res.json({"message": `User with id ${id} updated`, user});
});

//DELETE method
app.delete('/users/:id', (req, res) => {
    const newId = req.params.id;
    res.status(204).json({"message": `User with id ${newId} deleted`});
});

app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
});


