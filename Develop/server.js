// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'add.html'));
});

app.get('/api/characters', (req, res) => {
  return res.json(characters);
});

app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  for (let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

app.post('/api/characters', (req, res) => {
  const newCharacter = req.body;

  })
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});