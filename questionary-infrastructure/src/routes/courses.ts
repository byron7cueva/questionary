import { Router, Request, Response, NextFunction } from 'express';

import { App } from '../app/App';

const coursesRouter = Router();

/* Config routes */
coursesRouter.get('/', getAllCourses);
coursesRouter.post('/', saveCourse);

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
    const courses = await App.getInstance().courseGateway.getAll();
    response.status(200);
    response.send(courses);
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
    const course = await App.getInstance().courseGateway.save(body);
    response.status(201);
    response.send(course);
  } catch(error) {
    next(error);
  }
}

export {
  coursesRouter
}