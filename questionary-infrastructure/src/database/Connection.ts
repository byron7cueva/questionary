import debug from 'debug';
import { Sequelize } from 'sequelize';
import defaults from 'defaults';
import { dbConfig } from '../config/db';
import { serverConfig } from '../config/server';

const log = debug('questionary:db')

export class Connection {
  private static instance: Connection;

  private _connect: Sequelize;

  private constructor() {
    this._connect = new Sequelize(
      defaults(dbConfig, {
        dialect: 'postgres',
        logging: serverConfig.devEnv ? this.log : false,
        logQueryParameters: true,
        query: {
          raw: true
        },
        define: {
          cameCased: true
        }
      }));
  }

  static getInstance() {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }
    return Connection.instance;
  }

  get connect (): Sequelize {
    return this._connect;
  }

  private log(query: string, options: any) {
    log(query);
  }
}