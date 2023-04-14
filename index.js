const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 500;

app.get('/', (req, res) => {
    res.send('my phones is coming');
})

app.get('/phones', (req, res)=> {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})

app.listen(port, ()=> {
    console.log(`my phone server is running on port: ${port}`);
})