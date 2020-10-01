import { Router, Request, Response, NextFunction } from 'express';

import { App } from '../app/App';

const coursesRouter = Router();

/* Config routes */
coursesRouter.get('/', getAllCourses);

/* Implement handler of routers */

/**
 * Return all courses
 * 
 * @param {Request} request Request object
 * @param {Response} response Response object
 * @param {NextFunction} next Next function
 */
async function getAllCourses(request: Request, response: Response, next: NextFunction) {
  try {
    const courses = await App.getInstance().getCourseGateway().getAll();
    response.status(200);
    response.send(courses);
  } catch(error) {
    next(error);
  }
}

export {
  coursesRouter
}