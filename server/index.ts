import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import { syncElasticToMysql } from './helpers/elasticSearchHelper';

// rest of the code remains same
const app = express();
const PORT = process.env.PORT || 8000;

//Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '/uploads/')));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

syncElasticToMysql();
