import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';

// rest of the code remains same
const app = express();
const PORT = 8000;

//Parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});