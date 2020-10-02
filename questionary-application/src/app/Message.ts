import util from 'util';
import fs from 'fs';
import yaml from 'js-yaml';

/**
 * Manager messages
 */
export class Message {
  private static _instance: Message;

  private _messages: any;

  private constructor() {
    this._messages = {};
  }

  /**
   * Return Message Instance
   * 
   * @return {Message} Instance
   */
  static getInstance(): Message {
    if(!Message._instance) {
      Message._instance = new Message();
    }
    return Message._instance;
  }

  /**
   * Return message
   * 
   * @param {string} key Key del message in the yaml file
   * @param {any[]} args Arguments
   */
  getMessage(key: string, ...args: any[]) {
    if (!this._messages[key]) {
      throw new Error("Don't exist the key");
    }
    return util.format.apply(this, [
      this._messages[key],
      ...args
    ]);
  }

  /**
   * Register yaml file
   * 
   * @param {sring} localPath Url local
   */
  async registerMessages(localPath: string) {
    const stat = util.promisify(fs.stat);
    const readFile  = util.promisify(fs.readFile);
    const existFile = await stat(localPath);

    if (!existFile) {
      throw new Error("Don't exist file to load messages");
    }

    const file = await readFile(localPath, {encoding: 'utf-8'});
    const data = yaml.load(file);
    this._messages = {
      ...this._messages,
      ...data
    };
  }
}