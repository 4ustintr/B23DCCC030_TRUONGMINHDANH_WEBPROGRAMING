const express = require('express');
const app =express();
const port = 3000;

app.use(express.json());

app.get('/users', (req, res) => {
    res.json([
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Jane Smith'
    }
  ]);
});

app.get("/", (req, res) => {
    res.send("It's working");
});

app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
});