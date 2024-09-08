
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import expressEjsLayouts from 'express-ejs-layouts';


import { fileURLToPath } from 'url';
import { dirname } from 'path';

//get directory name from the current module

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//to hook index.js with server

import {router as indexRouter} from './routes/index.js';



app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.set('layout', 'layouts/layout');
app.use(expressEjsLayouts);
app.use(express.static('public'));//stylesheet , images


import mongoose from 'mongoose';
console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;


db.on('error',(error) => {
     console.error('mongoDB connection error :',error)})
db.once('open', () => {
    console.log('connected to mongoose successfully')})
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000);




