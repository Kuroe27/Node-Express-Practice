import express from 'express';
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import persons from './Persons.js';
const app = express()

const request = (req, res, next) => {
    console.log('New Request')
    next()
}
// middleware
app.use(request)

// get person  
app.get('/api/persons', (req, res) => {
    res.json(persons);
});

//static folder
app.use(express.static(path.join(__dirname, 'test')))

app.listen(5000)



