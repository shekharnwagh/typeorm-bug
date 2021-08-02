import { Connection, createConnection, EntityManager } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { entities } from './entities';

export class Db {
    public Ready: Promise<void>;

    private conn!: Connection;

    constructor() {
        this.Ready = new Promise((resolve, reject) => {
            createConnection({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: process.env.DB_USERNAME as string,
                password: process.env.DB_PASSWORD as string,
                database: 'test',
                schema: 'public',
                logging: true,
                entities,
                namingStrategy: new SnakeNamingStrategy(),
                synchronize: true,
            })
                .then(conn => {
                    console.log('Connected to postgres database');
                    this.conn = conn;
                    resolve();
                })
                .catch(err => {
                    console.error(`While connecting to the postgres database: ${err}`);
                    reject(err);
                });
        });
    }

    public getManager(): EntityManager {
        return this.conn.manager;
    }
}

const db = new Db();

export default db;
