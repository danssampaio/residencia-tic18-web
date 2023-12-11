const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  const filePath = path.join(__dirname, 'app', req.params[0]);
  res.sendFile(filePath);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

