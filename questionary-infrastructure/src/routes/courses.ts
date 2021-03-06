import { Router, Request, Response, NextFunction } from 'express';

import { App } from '../app/App';
import { responseHandler } from '../util/responseHandler';

const coursesRouter = Router();

/* Config routes */
coursesRouter.get('/', getAllCourses);
coursesRouter.post('/', saveCourse);
coursesRouter.put('/:courseId', updateCourse);
coursesRouter.delete('/:courseId', deleteCourse);
coursesRouter.get('/:courseId', getCourse);

/* Implement handler of routers */

/**
 * Route to get all courses
 * 
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function getAllCourses(request: Request, response: Response, next: NextFunction) {
  try {
    const responseObject = await App.getInstance().courseGateway.getAll();
    responseHandler(response, responseObject);
  } catch(error) {
    next(error);
  }
}

/**
 * Route post to save course
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function saveCourse(request: Request, response: Response, next: NextFunction) {
  try {
    const { body } = request;
    const responseObject = await App.getInstance().courseGateway.save(body);
    responseHandler(response, responseObject, 201);
  } catch(error) {
    next(error);
  }
}

/**
 * Route for update course
 * 
 * @param {Request} request Resquest object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function updateCourse(request: Request, response: Response, next: NextFunction) {
  try {
    const { body, params: { courseId } } = request;
    const responseObject = await App.getInstance().courseGateway.update(courseId, body);
    responseHandler(response, responseObject);
  } catch(error) {
    next(error);
  }
}

/**
 * Route to delete a course
 * 
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function deleteCourse(request: Request, response: Response, next: NextFunction) {
  try {
    const { params: { courseId } } = request;
    const responseObject = await App.getInstance().courseGateway.delete(courseId);
    responseHandler(response, responseObject);
  } catch(error) {
    next(error);
  }
}

/**
 * Route to get a course
 * 
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function getCourse(request: Request, response: Response, next: NextFunction) {
  try {
    const { params: { courseId } } = request;
    const responseObject = await App.getInstance().courseGateway.getCourseWithQuestions(courseId);
    responseHandler(response, responseObject);
  } catch(error) {
    next(error);
  }
}

export {
  coursesRouter
}