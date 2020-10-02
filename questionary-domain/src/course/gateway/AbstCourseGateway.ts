import { AbstGateway, ServiceResponse } from 'questionary-common';

import { AbstCourseUseCase } from '../usecase/AbstCourseUseCase';

/**
 * Abstract class to implemented CourseGateway
 */
export abstract class AbstCourseGateway extends AbstGateway<AbstCourseUseCase> {

  /**
   * Get all courses
   * @return {Promise<ServiceResponse>} List of courses
   */
  abstract getAll(): Promise<ServiceResponse>;

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<ServiceResponse>} Course saved
   */
  abstract async save(course: any): Promise<ServiceResponse>;

  /**
   * Update a course
   * 
   * @param {string} courseId Id of course
   * @param {any} course Object with info of course
   * @return {Promise<ServiceResponse>} Course updated
   */
  abstract async update(courseId: string, course: any): Promise<ServiceResponse>;

  /**
   * Delete a course
   * 
   * @param {string} courseId Id of course
   * @return {Promise<ServiceResponse>} True if delete or False if not delete
   */
  abstract delete(courseId: string): Promise<ServiceResponse>;

  /**
   * Return a course with your questions
   * 
   * @param {string} courseId Id of course
   * @return {Promise<ServiceResponse>} Course
   */
  abstract getCourseWithQuestions(courseId: string): Promise<ServiceResponse>;
}