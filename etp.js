
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.post('/write-to-file', (req, res) => {
  const filePath = 'example.txt';
  const content = req.body.content;

    res.send('File written successfully');
  });
app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
