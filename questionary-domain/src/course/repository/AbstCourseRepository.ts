import { AbstRepository } from 'questionary-common';
import { Course, CourseCreate } from '../entity/Course';

/**
 * Abstract class to implements CourseRepository
 */
export abstract class AbstCourseRepository extends AbstRepository {

  /**
   * Get All Courses
   * 
   * @return {Promise<Course[]>} List of courses
   */
  abstract getAll(): Promise<Course[]>;

  /**
   * Create the new course
   * 
   * @param {CourseCreate} course Interface to create course
   * @return {Course} Course saved
   */
  abstract create(course: CourseCreate): Course;

  /**
   * Update course
   * 
   * @param {Course} course Course to update
   * @return {Course} Course updated
   */
  abstract update(course: Course): Course;

  /**
   * Delete course
   * 
   * @param {number} courseId Id of course
   * @return {boolean} True if course deleted or false if don't deleted
   */
  abstract delete(courseId: number): boolean;

  /**
   * Get one course by courseId
   * 
   * @param {number} courseId Id of course
   */
  abstract getById(courseId: number): Course;
}