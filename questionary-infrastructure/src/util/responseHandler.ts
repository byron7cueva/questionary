import { Response } from 'express';
import { ServiceResponse, TypeServiceResponse } from 'questionary-common';

export function responseHandler(response: Response, responseObject: ServiceResponse, statusCode: number = 200): void {
  switch (responseObject.type) {
    case TypeServiceResponse.SUCCESS:
    case TypeServiceResponse.WARNING:
      response.status(statusCode); break;
    case TypeServiceResponse.ERROR:
      response.status(500);
      break;
  }
  response.send(responseObject);
}