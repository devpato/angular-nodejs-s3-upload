const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const upload = require('./middleware/file-upload');

app.use(bodyParser.json());
app.use(cors());

app.post('/api/v1/upload', upload.array('image', 1), (req, res) => {
  res.send({ image: req.file });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
