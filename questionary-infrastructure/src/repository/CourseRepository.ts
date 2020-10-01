import { Course, AbstCourseRepository } from 'questionary-domain';
import { CourseModel } from '../model/CourseModel';

/**
 * Implementation of AbstCourseRepository
 */
export class CourseRepository implements AbstCourseRepository {

  /**
   * Return all courses
   * 
   * @return {Promise<Course[]>} List of courses
   */
  getAll(): Promise<Course[]> {
    return CourseModel.findAll();
  }
}