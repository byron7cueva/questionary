import { Router, Request, Response, NextFunction } from 'express';

import { App } from '../app/App';

const questionsRouter = Router();

/* Routes */
questionsRouter.post('/', saveQuestion);
questionsRouter.put('/:questionId', updateQuestion);


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
    response.status(201);
    response.send(question);
  } catch(error) {
    next(error);
  }
}

/**
 * Route to update a question
 * 
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function updateQuestion(request: Request, response: Response, next: NextFunction) {
  try {
    const { body, params: { questionId } } = request;
    const question = await App.getInstance().questionGateway.update(questionId, body);
    response.status(200);
    response.send(question);
  } catch(error) {
    next(error);
  }
}

export {
  questionsRouter
}