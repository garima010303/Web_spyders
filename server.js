const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});
app.get('/lki', (req, res) => {
    res.send('Who is calling lakki; have a nice day');
});
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
const PORT=process.env.PORT||3000
app.listen(PORT, () => console.log('Spydrs Running on port 3000!'));