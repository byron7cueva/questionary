import { Router, Request, Response, NextFunction } from 'express';

import { App } from '../app/App';

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
    const result = await App.getInstance().questionGateway.delete(questionId);
    response.status(200);
    response.send(result);
  } catch(error) {
    next(error);
  }
}

async function findQuestionIncludeQuery(request: Request, response: Response, next: NextFunction) {
  try {
    let { query: { questionQuery } } = request;
    questionQuery = questionQuery ? questionQuery as string : undefined;
    const questions = await App.getInstance().questionGateway.findQuestionsIncludeQuery(questionQuery);
    response.status(200);
    response.send(questions);
  } catch(error) {
    next(error);
  }
}

export {
  questionsRouter
}