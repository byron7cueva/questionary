import { injectable, inject } from 'tsyringe';
import {
  ContainerToken,
  AbstCourseGateway,
  AbstCourseUseCase,
  Course,
  CourseCreate
} from 'questionary-domain';

/**
 * Class CourseGateway implementation fof AbstCourseGateway
 */
@injectable()
export class CourseGateway extends AbstCourseGateway {

  /**
   * Constructor of CourseGateway
   * 
   * @param {AbstCourseUseCase} useCase Use case of course
   */
  constructor(
    @inject(ContainerToken.getInstance().AbstCourseUseCase) useCase: AbstCourseUseCase
  ) {
    super(useCase);
  }

  /**
   * Get all courses
   * 
   * @return {Promise<Course[]>} List of courses
   */
  getAll(): Promise<Course[]> {
    return this.useCase.getAll();
  }

  /**
   * Save a course
   * 
   * @param {any} course Object with info of course
   * @return {Promise<Course>} Course saved
   */
  save(course: any): Promise<Course> {
    const newCourse: CourseCreate = {
      ...course
    };
    return this.useCase.save(newCourse);
  }

  /**
   * Update a course
   * 
   * @param {number} courseId Id of course
   * @param {any} course Object with info of course
   * @return {Promise<Course>} Course updated
   */
  update(courseId: number, course: any): Promise<Course> {
    const updateCourse: Course = {
      ...course,
      courseId
    };
    return this.useCase.update(updateCourse);
  }

  /**
   * Delete a course
   * 
   * @param {number} courseId Id of course
   * @return {Promise<boolean>} True if delete or False if not delete
   */
  delete(courseId: number): Promise<boolean> {
    return this.delete(courseId);
  }

  getCourseWithQuestions(courseId: number): Promise<Course> {
    throw new Error('Method not implemented.');
  }
}