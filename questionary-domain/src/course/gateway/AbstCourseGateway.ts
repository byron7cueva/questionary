import { AbstGateway } from 'questionary-common';

import { AbstCourseUseCase } from '../usecase/AbstCourseUseCase';
import { Course, CourseCreate } from '../entity/Course';

/**
 * Abstract class to implemented CourseGateway
 */
export abstract class AbstCourseGateway extends AbstGateway<AbstCourseUseCase> {

  /**
   * Get all courses
   * @return {Promise<Course[]>} List of courses
   */
  abstract getAll(): Promise<Course[]>;

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<Course>} Course saved
   */
  abstract async save(course: any): Promise<Course>;

  abstract async update(courseId: number, course: any): Promise<Course>;

  abstract delete(courseId: number): Promise<boolean>;

  abstract getCourseWithQuestions(courseId: number): Promise<Course>;
}