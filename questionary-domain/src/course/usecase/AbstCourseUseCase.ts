import { AbstUseCase } from 'questionary-common';

import { AbstCourseRepository } from '../repository/AbstCourseRepository';
import { Course, CourseCreate } from '../entity/Course';

/**
 * Abstract class to implemented CourseUseCase
 */
export abstract class AbstCourseUseCase extends AbstUseCase<AbstCourseRepository> {

  /**
   * Get all courses
   * 
   * @return {Promise<Course[]>} List of all courses
   */
  abstract getAll(): Promise<Course[]>;

  /**
   * Save a new course
   * 
   * @param {CourseCreate} course Course to save
   * @return {Promise<Course>} Course saved
   */
  abstract save(course: CourseCreate): Promise<Course>;

  /**
   * Update course
   * 
   * @param {Course} course Course to update
   * @return {Promise<Course>} Course updated
   */
  abstract update(course: Course): Promise<Course>;

  abstract delete(courseId: number): Promise<boolean>;

  abstract getCourseAndQuestionsById(courseId: number): Promise<Course>;
}