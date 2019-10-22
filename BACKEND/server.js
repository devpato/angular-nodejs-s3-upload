const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
/* Import your upload middleware */

app.use(bodyParser.json());
app.use(cors());

/* You POST route here */

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
