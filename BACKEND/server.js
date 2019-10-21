const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const upload = require('./middleware/file-upload');
var app = express();

app.use(bodyParser.json());
app.use(cors);

app.post('api/v1/upload', upload.array('image', 1), (req, res, next) => {
  console.log('Image name', req.file);
  res.send('Image uploaded to S3!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
