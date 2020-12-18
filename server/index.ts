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

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
//app.set('trust proxy', 1);

// enable CORS 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '/uploads/')));

if (process.env.NODE_ENV == 'dev') {
  app.use(express.static(path.join(__dirname, '/../client/dist/')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../client/dist/index.html')));
} else {
  app.use(express.static(path.join(__dirname, '/../../client/dist/')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../../client/dist/index.html')));
}

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

syncElasticToMysql();
