import defaultData from './default.js';
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'

import { connection } from './databse/db.js';
import router from './routes/route.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router);

const PORT = 8000;

connection(); 

app.listen(PORT, () => console.log(`server is running successfully on port ${PORT}`));

defaultData();