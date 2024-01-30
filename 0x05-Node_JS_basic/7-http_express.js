const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databasePath = `${process.argv[2]}`;

  try {
    const message = await countStudents(databasePath);
    res.send(`This is the list of our students:\n${message}`);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
