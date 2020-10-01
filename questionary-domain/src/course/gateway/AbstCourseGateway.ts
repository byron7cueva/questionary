import { AbstGateway } from 'questionary-common';
import { AbstCourseUseCase } from '../usecase/AbstCourseUseCase';
import { Course } from '../entity/Course';

/**
 * Abstract class to implemented CourseGateway
 */
export abstract class AbstCourseGateway extends AbstGateway<AbstCourseUseCase> {

  /**
   * Get all courses
   * @return {Promise<Course[]>} List of courses
   */
  abstract getAll(): Promise<Course[]>;
}