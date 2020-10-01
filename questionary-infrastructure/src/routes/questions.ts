import { Router, Request, Response, NextFunction } from 'express';

import { App } from '../app/App';

const questionsRouter = Router();

/* Routes */
questionsRouter.post('/', saveQuestion);


/* Implements routes */

/**
 * Route to save a question
 * 
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function saveQuestion(request: Request, response: Response, next: NextFunction) {
  try {
    const { body } = request;
    const question = await App.getInstance().questionGateway.save(body);
    response.status(200);
    response.send(question);
  } catch(error) {
    next(error);
  }
}

export {
  questionsRouter
}