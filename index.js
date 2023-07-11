import express from 'express';
import moment from 'moment/moment.js';
import path from 'path';
import url from 'url';
import router from './routes/api/persons.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const request = (req, res, next) => {
    console.log(req.url)
    console.log(req.protocol)
    console.log(req.get('host'))
    console.log(req.originalUrl)
    console.log(moment().format())
    next()
}
// middleware
app.use(request)


//static folder
app.use(express.static(path.join(__dirname, 'test')))



app.use('/api/persons', router)
app.listen(5000)



