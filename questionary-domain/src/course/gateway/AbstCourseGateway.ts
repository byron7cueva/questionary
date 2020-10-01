import { AbstGateway } from 'questionary-common';

import { AbstCourseUseCase } from '../usecase/AbstCourseUseCase';

/**
 * Abstract class to implemented CourseGateway
 */
export abstract class AbstCourseGateway extends AbstGateway<AbstCourseUseCase> {

  /**
   * Get all courses
   * @return {Promise<any[]>} List of courses
   */
  abstract getAll(): Promise<any[]>;

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<any>} Course saved
   */
  abstract async save(course: any): Promise<any>;

  /**
   * Update a course
   * 
   * @param {string} courseId Id of course
   * @param {any} course Object with info of course
   * @return {Promise<any>} Course updated
   */
  abstract async update(courseId: string, course: any): Promise<any>;

  /**
   * Delete a course
   * 
   * @param {string} courseId Id of course
   * @return {Promise<boolean>} True if delete or False if not delete
   */
  abstract delete(courseId: string): Promise<boolean>;

  /**
   * Return a course with your questions
   * 
   * @param {string} courseId Id of course
   * @return {Promise<any>} Course
   */
  abstract getCourseWithQuestions(courseId: string): Promise<any>;
}