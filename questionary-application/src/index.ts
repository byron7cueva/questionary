import 'reflect-metadata';
import path from 'path';
import { Message } from './app/Message';

export * from './app';
export * from './course';

Message.getInstance()
      .registerMessages(path.join(__dirname, '..', '..', 'resources', 'messages.yml'));

export {
  Message
}