import express, { Request, Response } from 'express';
import db from './db';

const app = express();

db.Ready.then(() => {
    console.log(`Database is ready, setting up router`);
}).catch(err => {
    console.error(`ERR while getting entity manager from db: ${err.stack}`);
});

app.get('/status', (request: Request, response: Response): void => {
    response.status(200).send({ success: true });
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const HOST = process.env.HOST ? process.env.HOST : 'localhost';

app.listen(PORT, HOST, () => {
    console.info(`Started server on HOST: ${HOST}, at PORT: ${PORT}`);
});
