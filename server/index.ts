import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import * as dotenv from 'dotenv';

dotenv.config();

// rest of the code remains same
const app = express();
const PORT = process.env.PORT || 8000

console.log(process.env.DB_PASSWORD)

//Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});