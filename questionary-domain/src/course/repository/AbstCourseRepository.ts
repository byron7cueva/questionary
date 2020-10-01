import { AbstRepository } from 'questionary-common';
import { Course } from '../entity/Course';

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
}