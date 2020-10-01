import { AbstUseCase } from 'questionary-common';
import { AbstCourseRepository } from '../repository/AbstCourseRepository';
import { Course } from '../entity/Course';

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
}