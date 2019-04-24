require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, './dist')));

const port = 3030;
app.listen(port, () => {
  console.log(`Server active on ${port}`)
});