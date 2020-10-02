import { Router, Request, Response, NextFunction } from 'express';

import { App } from '../app/App';
import { responseHandler } from '../util/responseHandler';

const questionsRouter = Router();

/* Routes */
questionsRouter.post('/', saveQuestion);
questionsRouter.put('/:questionId', updateQuestion);
questionsRouter.delete('/:questionId', deleteQuestion);
questionsRouter.get('/', findQuestionIncludeQuery);


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
    const responseObject = await App.getInstance().questionGateway.save(body);
    responseHandler(response, responseObject, 201);
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
    const responseObject = await App.getInstance().questionGateway.update(questionId, body);
    responseHandler(response, responseObject);
  } catch(error) {
    next(error);
  }
}

/**
 * Route to delete a question
 * 
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function deleteQuestion(request: Request, response: Response, next: NextFunction) {
  try {
    const { params: { questionId } } = request;
    const responseObject = await App.getInstance().questionGateway.delete(questionId);
    responseHandler(response, responseObject);
  } catch(error) {
    next(error);
  }
}

async function findQuestionIncludeQuery(request: Request, response: Response, next: NextFunction) {
  try {
    let { query: { questionQuery } } = request;
    questionQuery = questionQuery ? questionQuery as string : undefined;
    const responseObject = await App.getInstance().questionGateway.findQuestionsIncludeQuery(questionQuery);
    responseHandler(response, responseObject);
  } catch(error) {
    next(error);
  }
}

export {
  questionsRouter
}