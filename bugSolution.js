const express = require('express');
const fs = require('fs');
const app = express();
app.get('/', (req, res) => {
  fs.readFile('./largeFile.txt', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
    } else {
      res.send(data);
    }
  });
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});