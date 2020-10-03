import debug from 'debug';
import { Response, Request, NextFunction } from 'express';
import { ServiceResponse, TypeServiceResponse } from 'questionary-common';
import { responseHandler } from './responseHandler';

const log = debug('questionary:app');

export function fatalErrorHandler(error: Error): void {
  log(error.stack);
  process.exit(1)
}

export function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): void {
  log(error.stack);
  const responseObject: ServiceResponse = {
    type: TypeServiceResponse.ERROR,
    message: error.message
  }
  responseHandler(response, responseObject, 500);
}