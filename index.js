const express = require('express');
const app = express();
const port = process.env.NODE_ENV === 'development' ? '1234' : process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/twiml/expressions', (req, res) => {
    res.set('Content-Type', 'text/xml');
    res.sendFile('./responses/expressions.xml', { root: '.' });
});

app.get('/sounds/violin', (req, res) => {
    res.set('Content-Type', 'audio/mpeg');
    res.sendFile('./responses/violin.mp3', { root: '.' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));