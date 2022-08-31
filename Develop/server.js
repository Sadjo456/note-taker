const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const notes = require("./db/notes")

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
  return res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = Math.floor(Math.random()*999999999)
  notes.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(newNote))
  })
  
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});