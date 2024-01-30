const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School');
  } else if (req.url === '/students') {
    try {
      const message = countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${message}`);
    } catch (error) {
      res.end(`Error: ${error.message}`);
    }
  }
});

const PORT = 1245;
app.listen(PORT, () => {
console.log('...');
});

module.exports = app;
