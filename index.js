import express from 'express';
import path from 'path';
import url from 'url';
import request from './middleware/middleware.js';
import router from './routes/api/persons.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express()

// body parse middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// middleware
app.use(request)


//static folder
app.use(express.static(path.join(__dirname, 'test')))



app.use('/api/persons', router)

app.listen(5000)



