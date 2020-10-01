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
   * @return {Promise<Course>} Course saved
   */
  abstract create(course: CourseCreate): Promise<Course>;

  /**
   * Update course
   * 
   * @param {Course} course Course to update
   * @return {Promise<Course>} Course updated
   */
  abstract update(course: Course): Promise<Course>;

  /**
   * Delete course
   * 
   * @param {number} courseId Id of course
   * @return {Promise<boolean>} True if course deleted or false if don't deleted
   */
  abstract delete(courseId: number): Promise<boolean>;

  /**
   * Get one course by courseId
   * 
   * @param {number} courseId Id of course
   * @return {Promise<Course>} Course
   */
  abstract getById(courseId: number): Promise<Course>;
}