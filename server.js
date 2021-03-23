const path = require("path");
const express = require('express');
const app = express();
require('dotenv').config()

app.use(express.static(path.join(__dirname, "statics")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});
app.get('/lki', (req, res) => {
    res.send('Who is calling lakki; have a nice day');
});
const PORT=process.env.PORT||3000
app.listen(PORT, () => console.log('Spydrs Running on port 3000!'));