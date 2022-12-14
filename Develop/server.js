const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;
const notes = require("./db/db.json");
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
 res.json(notes);
});

app.post('/api/notes', (req, res) => {

    req.body.id = Math.floor(Math.random()*999999)
    let newNote = req.body;
  notes.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(notes))
  res.json(notes)
  })

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});