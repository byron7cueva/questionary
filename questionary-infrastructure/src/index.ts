import { Server } from './server';
import { fatalErrorHandler } from './util/errorHandler';

process.on('uncaughtException', fatalErrorHandler);
process.on('unhandledRejection', fatalErrorHandler);

Server.getInstance().run();