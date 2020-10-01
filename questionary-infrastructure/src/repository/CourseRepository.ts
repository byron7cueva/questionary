import { Course, AbstCourseRepository } from 'questionary-domain';
import { CourseModel } from '../model/CourseModel';

/**
 * Implementation of AbstCourseRepository
 */
export class CourseRepository implements AbstCourseRepository {
  getAll(): Promise<Course[]> {
    return CourseModel.findAll();
  }
}