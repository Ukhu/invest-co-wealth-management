import '@babel/polyfill';
import express, { urlencoded, json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import debug from 'debug';
import routes from './routes';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const log = debug('dev');

// Express Middlewares
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to InvestCo Wealth and Asset Management');
});

app.use(routes);

// setup swagger documentation
const documentation = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(documentation));

app.use('*', (req, res) => {
  res.status(404).send('This route does not exist, kindly visit the root route at "/"');
});

app.listen(PORT, () => {
  log(`Server started on port ${PORT}`);
});

export default app;
