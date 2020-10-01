import express, { Express, Router } from 'express';
import { serverConfig } from '../config/server';

/**
 * Singleton class Server
 */
export class Server {

  /**
   * Instance server
   * 
   * @private
   * @static
   */
  private static instance: Server;

  /**
   * Application express
   */
  private _app: Express;

  /**
   * Constructor of Server
   * 
   * @private
   */
  private constructor() {
    this._app = express();
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
  }

  /**
   * Return the instance of Server
   */
  static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  /**
   * Run the server
   */
  run(): void {
    this._app.listen(serverConfig.port);
  }

  /**
   * Register route on the server
   * 
   * @param {string} endpoint Url endpoint
   * @param {Router} router Router
   */
  registerRoute(endpoint: string, router: Router) {
    this._app.use(endpoint, router);
  }
}