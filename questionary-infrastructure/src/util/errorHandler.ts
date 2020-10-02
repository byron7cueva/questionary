import { Response, Request, NextFunction } from 'express';
import { ServiceResponse, TypeServiceResponse } from 'questionary-common';
import { responseHandler } from './responseHandler';

export function fatalErrorHandler(error: Error): void {
  console.error(error.message)
  console.error(error.stack)
  process.exit(1)
}

export function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): void {
  console.error(error.message);
  console.error(error.stack);
  const responseObject: ServiceResponse = {
    type: TypeServiceResponse.ERROR,
    message: error.message
  }
  responseHandler(response, responseObject, 500);
}