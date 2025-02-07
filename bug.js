const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the file is large or the stream is slow
  const largeFile = fs.readFileSync('./largeFile.txt');
  res.send(largeFile);
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});